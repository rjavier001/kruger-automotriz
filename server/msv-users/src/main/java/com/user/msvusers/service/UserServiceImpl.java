package com.user.msvusers.service;


import com.user.msvusers.clients.OrderClientRest;
import com.user.msvusers.clients.ProductsClientRest;
import com.user.msvusers.model.Order;
import com.user.msvusers.model.entity.User;
import com.user.msvusers.model.entity.UserOrder;
import com.user.msvusers.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService{

  @Autowired
  private UserRepository repository;

  @Autowired
  private OrderClientRest client;

  @Override
  @Transactional(readOnly = true)
  public List<User> findAll() {
    return (List<User>) repository.findAll() ;
  }

  @Override
  @Transactional(readOnly = true)
  public Optional<User> findById(Long id) {
    return repository.findById(id);
  }

  @Override
  @Transactional
  public User save(User user) {
    return repository.save(user);
  }

  @Override
  @Transactional
  public void delete(Long id) {
    repository.deleteById(id);
  }

  @Override
  @Transactional
  public Optional<Order> assignOrder(Order order, Long userId) {
    Optional<User> o = repository.findById(userId);
    if(o.isPresent()){
      Order orderMsv = client.getOrder(order.getId());

      User user = o.get();
      UserOrder userOrder = new UserOrder();
      userOrder.setOrderId(orderMsv.getId());

      user.addUserOrder(userOrder);
      repository.save(user);
      return Optional.of(orderMsv);
    }
    return Optional.empty();
  }

  @Override
  @Transactional
  public Optional<Order> createOrder(Order order, Long userId) {
    Optional<User> o = repository.findById(userId);
    if(o.isPresent()){
      Order orderNewMsv = client.createO(order);

      User user = o.get();
      UserOrder userOrder = new UserOrder();
      userOrder.setOrderId(orderNewMsv.getId());

      user.addUserOrder(userOrder);
      repository.save(user);
      return Optional.of(orderNewMsv);
    }
    return Optional.empty();
  }

  @Override
  @Transactional
  public Optional<Order> deleteOrder(Order order, Long userId) {
    Optional<User> o = repository.findById(userId);
    if(o.isPresent()){
      Order orderMsv = client.getOrder(order.getId());

      User user = o.get();
      UserOrder userOrder = new UserOrder();
      userOrder.setOrderId(orderMsv.getId());

      user.removeUserOrder(userOrder);
      repository.save(user);
      return Optional.of(orderMsv);
    }
    return Optional.empty();
  }
}
