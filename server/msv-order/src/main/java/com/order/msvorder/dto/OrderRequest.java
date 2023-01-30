package com.order.msvorder.dto;


import com.order.msvorder.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderRequest {
    private Order order;
}