package com.user.msvusers.controller;

import com.user.msvusers.model.Order;
import com.user.msvusers.model.entity.User;
import com.user.msvusers.service.IUserService;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired
  private IUserService service;

  @GetMapping("/all")
  public List<User> getAllUser(){
    return service.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getUserById(@PathVariable Long id){
    Optional<User> optionalUser=service.findByIdWithOrders(id); //service.findById(id);
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
      userDB.setEmail(req.getEmail());
      userDB.setPassword(req.getPassword());
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

  @PutMapping("/assign-order/{userId}")
  public ResponseEntity<?> assignOrder(@RequestBody Order order, @PathVariable Long userId){
    Optional<Order> o;
    try{
      o = service.assignOrder(order, userId);
    } catch (FeignException e){
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje","No existe el usuario por el ID o error en la comunicacion"+ e.getMessage()));
    }
    if(o.isPresent()){
      return ResponseEntity.status(HttpStatus.CREATED).body(o.get());
    }
    return  ResponseEntity.notFound().build();
  }

  @PostMapping("/create-order/{userId}")
  public ResponseEntity<?> createOrder(@RequestBody Order order, @PathVariable Long userId){
    Optional<Order> o;
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



}
