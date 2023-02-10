package com.order.msvorder.clients;

import com.order.msvorder.entity.Order;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "msv-users")
public interface UserClientRest {

    //se aprovecha para elimnar de una vez tanto la orden en la tabla ORDER y la Orden de la tabla ed USUARIOS
    @DeleteMapping("/delete-user-order/{id}")
    void deleteUserOrderById(@PathVariable Long id);
    @PostMapping("/create-order/{userId}")
    void createOrder(@RequestBody Order order, @PathVariable Long userId);
}
