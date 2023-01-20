package com.order.msvorder.client;

import com.order.msvorder.client.fallbacks.CustomerFallback;
import com.order.msvorder.model.OrderRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="customer-microservice",url = "http://localhost:8080",path = "/api/card", fallback = CustomerFallback.class)
public interface CustomerClient {
    @PostMapping
    public ResponseEntity<?> addOrder(@RequestBody(required = true) OrderRequest request);
}
