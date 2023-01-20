package com.user.msvusers.controller;

import com.user.msvusers.model.User;
import com.user.msvusers.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    Optional<User> optionalUser=service.findById(id);
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
}
