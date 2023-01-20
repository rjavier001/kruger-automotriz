package com.order.msvorder.services.order;

import com.order.msvorder.entity.Order;

import java.util.List;

public interface IOrderService {

    public List<Order> findAllOrders();

    public Order createOrder(Order Order, Long customerId);
    public Order updateOrder(Order Order);
    public void deleteOrder(Long id);

    public Order getOrder(Long id);
}
