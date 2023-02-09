package com.order.msvorder.repository;


import com.order.msvorder.entity.OrderItem;
import com.order.msvorder.entity.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderProduct,Long> {

}
