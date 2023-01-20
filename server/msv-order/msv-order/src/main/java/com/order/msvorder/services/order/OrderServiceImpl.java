package com.order.msvorder.services.order;

import com.order.msvorder.client.CustomerClient;
import com.order.msvorder.client.ProductClient;
import com.order.msvorder.entity.Order;
import com.order.msvorder.entity.OrderItem;
import com.order.msvorder.entity.Payment;
import com.order.msvorder.model.OrderRequest;
import com.order.msvorder.model.Product;
import com.order.msvorder.repository.OrderRepository;
import com.order.msvorder.services.payment.PaymentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements IOrderService{

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    PaymentServiceImpl paymentServiceImpl;

    @Autowired
    ProductClient productClient;

    @Autowired
    CustomerClient customerClient;

    // -------------------create order service--------------------------------------------
    public Order createOrder(Order order, Long customerId){

        order.setCreated(new Date());
        order.setShipmentDate(new Date());

        Order createdOrder = orderRepository.save(order);

        //Al crear la orden se debe también crear el payment
        paymentServiceImpl.createPayment(new Payment("CREATED", UUID.randomUUID(), new Date(),createdOrder));

        //Al crear la orden se crea el cart con el customerId y el orderId
        customerClient.addOrder(new OrderRequest(customerId,order.getId()));

        //Actualizar el stock del producto
        createdOrder.getItems().forEach( orderItem ->{
            productClient.updateStockProduct(orderItem.getProductId(), orderItem.getQuantity() * -1);
        });

        //Actualizar el contador de ventas en el producto
        createdOrder.getItems().forEach( orderItem ->{
            productClient.updateSaleCounter(orderItem.getProductId(), orderItem.getQuantity());
        });

        return createdOrder;

    }

    // -------------------getOrder by ID service--------------------------------------------
    public Order getOrder(Long id){
        Order orderDB = orderRepository.findById(id).orElse(null);
        if(orderDB != null){
            List<OrderItem> listItems =  orderDB.getItems().stream().map(orderItem ->{
                    Product product = productClient.getProduct(orderItem.getProductId()).getBody();
                    orderItem.setProduct(product);
                    return orderItem;
                }).collect(Collectors.toList());
                orderDB.setItems(listItems);
        }
        return orderDB;
    }

    // -------------------Delete order --------------------------------------------
    public void deleteOrder(Long id){
        orderRepository.deleteById(id);
    }

    // -------------------UpdateOrder service--------------------------------------------

    public Order updateOrder(Order order){
        Order existingOrder = orderRepository.findById(order.getId()).orElse(null);

        existingOrder.setStatus(order.getStatus());
        existingOrder.setCreated(order.getCreated());
        existingOrder.setShipmentAddress(order.getShipmentAddress());
        existingOrder.setShipmentDate(order.getShipmentDate());
        existingOrder.setTotalPrice(order.getTotalPrice());
        return orderRepository.save(existingOrder);
    }

    @Override
    public List<Order> findAllOrders() {
        return  orderRepository.findAll();
    }

}
