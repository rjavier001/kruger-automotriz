package com.kruger.authserver.clients;

import com.kruger.authserver.entity.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;


@FeignClient(name = "msv-users")
public interface UserClientRest {

    @PostMapping(value= "/api/users/save")
    User createAuthUser(@RequestBody User user);
    @GetMapping(value= "/api/users/users-auth")
    User getUserByAuthId(@RequestParam(name="user_id",required = false) int id);

}
