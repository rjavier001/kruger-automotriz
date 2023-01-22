package com.user.msvusers.clients;

import com.user.msvusers.model.Order;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "msv-order", url = "localhost:8003")
public interface OrderClientRest {

    @GetMapping(value = "/{id}")
    Order getOrder(@PathVariable("id") long id);

    @PostMapping(value= "/user/{id}")
    Order  createOrder(@RequestBody Order order, @PathVariable("id") long customerId);

    @PostMapping("/")
    Order  createO(@RequestBody Order order);

}
