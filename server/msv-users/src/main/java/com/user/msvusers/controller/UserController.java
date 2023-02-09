package com.user.msvusers.controller;

import com.user.msvusers.configuration.CircuitBreaker.FallBackMethods;
import com.user.msvusers.model.Order;
import com.user.msvusers.model.entity.User;
import com.user.msvusers.model.entity.UserOrder;
import com.user.msvusers.service.IUserService;
import com.user.msvusers.service.UserServiceImpl;
import feign.FeignException;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController extends FallBackMethods{

  @Autowired
  private IUserService service;

  @Autowired
  private UserServiceImpl serviceIm;

  @GetMapping
  public List<User> getAllUser(){
    return service.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getUserById(@PathVariable Long id){
    Optional<User> optionalUser=service.findById(id); //service.findById(id);
    if(optionalUser.isPresent()){
//      return ResponseEntity.ok(optionalUser.get());
      return new ResponseEntity<>(optionalUser.get(), HttpStatus.OK);
    }
    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
  }
  @GetMapping("/users-auth")
  public ResponseEntity<?> getUserByAuthId(@RequestParam(name="user_id",required = false) int id){
    Optional<User> optionalUser=service.findByAuthId(id); //service.findById(id);
    if(optionalUser.isPresent()){
//      return ResponseEntity.ok(optionalUser.get());
      return new ResponseEntity<>(optionalUser.get(), HttpStatus.OK);
    }
    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
  }

  @PostMapping("/save")
  public ResponseEntity<?> createUser(@RequestBody User user){
    return new ResponseEntity<>(service.save(user),HttpStatus.CREATED);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> editUser(@RequestBody User req,@PathVariable Long id){
    Optional<User> optionalUser= service.findById(id);
    if(optionalUser.isPresent()){
      User userDB=optionalUser.get();
      userDB.setName(req.getName());
      userDB.setLastName(req.getLastName());
      userDB.setAge(req.getAge());
      userDB.setPhone(req.getPhone());
      userDB.setEmail(req.getEmail());
      return new ResponseEntity<>(service.save(userDB),HttpStatus.CREATED);
    }
    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteUser(@PathVariable Long id){
    Optional<User> optionalUser = service.findById(id);
    if(optionalUser.isPresent()){
      service.delete(id);
      return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
  }


  @CircuitBreaker(name="ordersCB", fallbackMethod = "fallBackAssignOrder")
  @PutMapping("/assign-order/{userId}")
  public ResponseEntity<?> assignOrder(@RequestBody UserOrder userOrder, @PathVariable Long userId){
    Optional<User> o;
    try{
      o = serviceIm.assignOrder(userOrder, userId);
    } catch (FeignException e){
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje","No existe el usuario por el ID o error en la comunicacion"+ e.getMessage()));
    }
    if(o.isPresent()){
      return ResponseEntity.status(HttpStatus.CREATED).body(o.get());
    }
    return  ResponseEntity.notFound().build();
  }


  @CircuitBreaker(name="ordersCB", fallbackMethod = "fallBackCreateOrder")
  @PostMapping("/create-order/{userId}")
  public ResponseEntity<?> createOrder(@RequestBody Order order, @PathVariable Long userId){
    Optional<Order> o;
    //if u want use fallback methods disable try-catch
    try{
      o = service.createOrder(order, userId);
    } catch (FeignException e){
      return ResponseEntity.status(HttpStatus.NOT_FOUND)
              .body(Collections.singletonMap("mensaje","No se pudo crear la orden o error en la comunicacion"+ e.getMessage()));
    }
    if(o.isPresent()){
      return ResponseEntity.status(HttpStatus.CREATED).body(o.get());
    }
    return  ResponseEntity.notFound().build();
  }

  @CircuitBreaker(name="ordersCB", fallbackMethod = "fallBackDeleteOrder")
  @DeleteMapping("/delete-order/{userId}")
  public ResponseEntity<?> deleteOrder(@RequestBody Order order, @PathVariable Long userId){
    Optional<Order> o;
    try{
      o = service.deleteOrder(order, userId);
    } catch (FeignException e){
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje","No existe el usuario por el ID o error en la comunicacion"+ e.getMessage()));
    }
    if(o.isPresent()){
      return ResponseEntity.status(HttpStatus.OK).body(o.get());
    }
    return  ResponseEntity.notFound().build();
  }

  @CircuitBreaker(name="ordersCB", fallbackMethod = "fallBackDeleteOrderById")
  @DeleteMapping("/delete-user-order/{id}")
  public ResponseEntity<?> deleteUserOrderById(@PathVariable Long id){
    service.deleteUserOrderById(id);
    return ResponseEntity.noContent().build();
  }
}
