package com.order.msvorder.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "msv-users", url = "${msv.users.url}/api/users")
public interface UserClientRest {

    //se aprovecha para elimnar de una vez tanto la orden en la tabla ORDER y la Orden de la tabla ed USUARIOS
    @DeleteMapping("/delete-user-order/{id}")
    void deleteUserOrderById(@PathVariable Long id);
}
