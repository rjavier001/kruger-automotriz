package com.order.msvorder.client.fallbacks;

import com.order.msvorder.client.CustomerClient;
import com.order.msvorder.model.Customer;
import com.order.msvorder.model.OrderRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class CustomerFallback implements CustomerClient{

    @Override
    public ResponseEntity<?> addOrder(OrderRequest request) {

        Customer customer = new Customer();
        customer.setEmail("none");
        customer.setName("none");
        
        return ResponseEntity.ok(customer);
    }
    
}
