package com.order.msvorder.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OrderRequest {
        
    private Long  customerId;
    private Long orderId;

}
