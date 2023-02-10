package com.order.msvorder.services.order;


import com.order.msvorder.clients.ProductClientRest;
import com.order.msvorder.clients.UserClientRest;
import com.order.msvorder.entity.Order;
import com.order.msvorder.entity.OrderProduct;
import com.order.msvorder.entity.Payment;
import com.order.msvorder.model.Product;
import com.order.msvorder.repository.OrderRepository;
import com.order.msvorder.services.payment.PaymentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements IOrderService{

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    PaymentServiceImpl paymentServiceImpl;

    @Autowired
    private UserClientRest client;

    @Autowired
    private ProductClientRest clientProduct;


    // -------------------create order service--------------------------------------------
    public Order createOrder(Order order, Long customerId){

        order.setCreated(new Date());
        order.setShipmentDate(new Date());

        Order createdOrder = orderRepository.save(order);

        //Al crear la orden se debe también crear el payment
        paymentServiceImpl.createPayment(new Payment("CREATED", UUID.randomUUID(), new Date()));


        return createdOrder;

    }

    // -------------------create order sin userId--------------------------------------------
    public Order createOrder2(Order order){
        //crear un payment por defecto al crearse una orden
        Payment payment = new Payment("CREATED", UUID.randomUUID(), new Date());

        order.setCreated(new Date());
        order.setShipmentDate(new Date());
        order.setPayment(payment);
        Order createdOrder = orderRepository.save(order);




        return createdOrder;

    }

    // -------------------getOrder by ID service--------------------------------------------
    public Order getOrder(Long id){
        Order orderDB = orderRepository.findById(id).orElse(null);
        return orderDB;
    }

    // Mostrar todas las ordenes de un usuario
    @Override
    @Transactional(readOnly = true)
    public List<Order> listByIds(Iterable<Long> ids) {
        return orderRepository.findAllById(ids);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Order> findByIdWithProducts(Long id) {
        Optional<Order> o= orderRepository.findById(id);

        if(o.isPresent()){
            Order order = o.get();
            if(!order.getOrderProducts().isEmpty()){
                List<Long> ids = order.getOrderProducts().stream().map(op -> op.getProductId()).collect(Collectors.toList());

                List<Product> products = clientProduct.getAllProductsByOrder(ids);
                order.setProducts(products);
            }
            return Optional.of(order);
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public Optional<OrderProduct> assignProduct(OrderProduct orderProduct, Long orderId) {
        Optional<Order> o= orderRepository.findById(orderId);
        if(o.isPresent()){
//            Product productMsv = clientProduct.detail(product.getId());

            Order order = o.get();
//            OrderProduct orderProduct2 = new OrderProduct();
//            orderProduct2.setProductId(orderProduct.getProductId());

            order.addOrderProduct(orderProduct);
            orderRepository.save(order);
            return Optional.of(orderProduct);
        }

        return Optional.empty();
    }

    @Override
    @Transactional
    public Optional<Product> deleteProduct(Product product, Long orderId) {
        Optional<Order> o= orderRepository.findById(orderId);
        if(o.isPresent()){
            Product productMsv = clientProduct.detail(product.getId());

            Order order = o.get();
            OrderProduct orderProduct = new OrderProduct();
            orderProduct.setProductId(productMsv.getId());

            order.removeOrderProduct(orderProduct);
            orderRepository.save(order);
            return Optional.of(productMsv);
        }
        return Optional.empty();
    }

    // -------------------Delete order --------------------------------------------
    @Override
    @Transactional
    public void deleteOrder(Long id){
        orderRepository.deleteById(id);
        //se aprovecha este metodo para eliminar de una vez Order de User
        //eliminamos order de ORDERS y order de USER
        client.deleteUserOrderById(id);
    }

    // -------------------UpdateOrder service--------------------------------------------
    @Override
    public Order updateOrder(Order order){
        Order existingOrder = getOrder(order.getId());
        if(existingOrder == null){
            return null;
        }
//        Order existingOrder = orderRepository.findById(order.getId()).orElse(null);
        existingOrder.setStatus(order.getStatus());
        existingOrder.setCreated(order.getCreated());
        existingOrder.setShipmentAddress(order.getShipmentAddress());
        existingOrder.setShipmentDate(order.getShipmentDate());
        existingOrder.setTotalPrice(order.getTotalPrice());
        existingOrder.setPayment(order.getPayment());
        return orderRepository.save(existingOrder);
    }

    @Override
    public List<Order> findAllOrders() {
        return  orderRepository.findAll();
    }

    @Override
    public Order save(Order order) {
        return orderRepository.save(order);
    }

}
