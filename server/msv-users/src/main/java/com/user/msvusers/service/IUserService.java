package com.user.msvusers.service;

import com.user.msvusers.model.User;

import java.util.List;
import java.util.Optional;


//@FeignClient(name = "user-service")
//@LoadBalancerClient(name = "user-service", configuration= LoadBalancerConfiguration.class)
public interface IUserService {
  List<User> findAll();
  Optional<User> findById(Long id);
  User save(User user);
  void delete(Long id);
}
