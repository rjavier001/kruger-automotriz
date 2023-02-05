package com.user.msvusers.configuration.CircuitBreaker;

import com.user.msvusers.model.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public class FallBackMethods {
  private ResponseEntity<?> fallBackAssignOrder(@RequestBody Order order, @PathVariable Long userId){
    return new ResponseEntity("msv-order response fail", HttpStatus.OK);
  }
  private ResponseEntity<?> fallBackCreateOrder(@RequestBody Order order, @PathVariable Long userId){
    return new ResponseEntity("msv-order response fail", HttpStatus.OK);
  }
  public ResponseEntity<?> fallBackDeleteOrder(@RequestBody Order order, @PathVariable Long userId){
    return new ResponseEntity("msv-order response fail", HttpStatus.OK);
  }
  public ResponseEntity<?> fallBackDeleteOrderById(@PathVariable Long id){
    return new ResponseEntity("msv-order response fail", HttpStatus.OK);
  }
}
