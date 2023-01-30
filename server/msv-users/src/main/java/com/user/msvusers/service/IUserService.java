package com.user.msvusers.service;

import com.user.msvusers.model.Order;
import com.user.msvusers.model.entity.User;

import java.util.List;
import java.util.Optional;


//@FeignClient(name = "user-service")
//@LoadBalancerClient(name = "user-service", configuration= LoadBalancerConfiguration.class)
public interface IUserService {
  List<User> findAll();
  Optional<User> findById(Long id);
  User save(User user);
  void delete(Long id);

  void deleteUserOrderById(Long id);

  //METODOS relacionados con el cliente http
  //Optional<Product> asignarProducts
  Optional<User> findByIdWithOrders(Long id);
  //Recibe la orden y el ID del usuario, asigna a un usuario ya existente en BDD
  Optional<Order> assignOrder(Order order, Long userId);
  //Recibe la orden y el ID del usuario, es para un usuario que todabia no existe en BDD
  Optional<Order> createOrder(Order order, Long userId);
  //Se elimina la orden del usuario mas no de BDD
  Optional<Order> deleteOrder(Order order, Long userId);




}
