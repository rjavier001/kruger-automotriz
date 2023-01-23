package com.order.msvorder.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "msv-users", url = "localhost:8001/api/users")
public interface UserClientRest {
    @DeleteMapping("/delete-user-order/{id}")
    void deleteUserOrderById(@PathVariable Long id);
}
