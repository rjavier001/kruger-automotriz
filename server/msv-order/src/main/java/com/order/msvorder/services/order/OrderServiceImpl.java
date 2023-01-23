package com.order.msvorder.services.order;


import com.order.msvorder.clients.UserClientRest;
import com.order.msvorder.entity.Order;
import com.order.msvorder.entity.Payment;
import com.order.msvorder.repository.OrderRepository;
import com.order.msvorder.services.payment.PaymentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class OrderServiceImpl implements IOrderService{

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    PaymentServiceImpl paymentServiceImpl;

    @Autowired
    private UserClientRest client;


    // -------------------create order service--------------------------------------------
    public Order createOrder(Order order, Long customerId){

        order.setCreated(new Date());
        order.setShipmentDate(new Date());

        Order createdOrder = orderRepository.save(order);

        //Al crear la orden se debe también crear el payment
        paymentServiceImpl.createPayment(new Payment("CREATED", UUID.randomUUID(), new Date(),createdOrder));


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

    @Override
    public Order save(Order order) {
        return orderRepository.save(order);
    }

}
