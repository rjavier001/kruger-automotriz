package com.order.msvorder.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.order.msvorder.entity.Order;
import com.order.msvorder.model.Product;
import com.order.msvorder.model.ProductD;
import com.order.msvorder.services.order.OrderServiceImpl;

import javax.validation.Valid;

import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/orders")
public class OrderController {


    @Autowired
    private OrderServiceImpl orderService;

    // -------------------Retrieve All Orders--------------------------------------------
    @GetMapping
    public ResponseEntity<List<Order>> listAllOrders() {
        List<Order> Orders = orderService.findAllOrders();
        if (Orders.isEmpty()) {
            return  ResponseEntity.noContent().build();
        }
        return  ResponseEntity.ok(Orders);
    }

    // -------------------Retrieve Single Order------------------------------------------
    @GetMapping(value = "/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable("id") long id) {
        //Order Order  = orderService.findByIdWithProducts(id) //orderService.getOrder(id);
        Optional<Order>  o = orderService.findByIdWithProducts(id); //orderService.getOrder(id);

        if (!o.isPresent()) {
            return  ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok(o.get());
    }

    //Aqui debo recibir el ID del customer ya que lo necesitare para crear el cart en un futuro
    // -------------------Create a Order-------------------------------------------
    @PostMapping(value= "/user/{id}")
    public ResponseEntity<Order> createOrder(@Valid @RequestBody Order Order, BindingResult result, @PathVariable("id") long customerId) {
        if (result.hasErrors()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, this.formatMessage(result));
        }
        Order OrderDB = orderService.createOrder (Order, customerId);

        return  ResponseEntity.status( HttpStatus.CREATED).body(OrderDB);
    }

    //
    @PostMapping
    public ResponseEntity<Order> createO(@Valid @RequestBody Order order, BindingResult result) {
        if (result.hasErrors()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, this.formatMessage(result));
        }
        Order OrderDB = orderService.save(order);

        return  ResponseEntity.status( HttpStatus.CREATED).body(OrderDB);
    }

    // ------------------- Update a Order ------------------------------------------------
    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateOrder(@PathVariable(name="id") Long id, @RequestBody Order Order) {

        Order.setId(id);
        Order currentOrder=orderService.updateOrder(Order);

        if (currentOrder == null) {
            return  ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok(currentOrder);
    }

    // ------------------- Delete a Order-----------------------------------------
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable("id") long id) {
        orderService.deleteOrder(id);
        return  ResponseEntity.status(HttpStatus.OK).body("Successfully operation. ");
    }

    @GetMapping("/orders-by-user")
    public ResponseEntity<?> getAllOrdersByUser(@RequestParam List<Long> ids){
        return ResponseEntity.ok(orderService.listByIds(ids));
    }

    @PutMapping("/assign-product/{orderId}")
    public ResponseEntity<?> assignProduct(@RequestBody Product product, @PathVariable Long orderId){
        Optional<Product> o;
        try{
            o = orderService.assignProduct(product, orderId);
        } catch (FeignException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje","No existe el producto por el id o no se logro la comunicación"+ e.getMessage()));
        }

        if(o.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(o.get());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete-product/{orderId}")
    public ResponseEntity<?> deleteProduct(@RequestBody Product product, @PathVariable Long orderId){
        Optional<Product> o;
        try{
            o = orderService.deleteProduct(product, orderId);
        } catch (FeignException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje","No existe el producto por el id o no se logro la comunicación"+ e.getMessage()));
        }

        if(o.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(o.get());
        }
        return ResponseEntity.notFound().build();
    }

    private String formatMessage( BindingResult result){
        List<Map<String,String>> errors = result.getFieldErrors().stream()
                .map(err ->{
                    Map<String,String> error =  new HashMap<>();
                    error.put(err.getField(), err.getDefaultMessage());
                    return error;

                }).collect(Collectors.toList());
        ErrorMessage errorMessage = ErrorMessage.builder()
                .code("01")
                .messages(errors).build();
        ObjectMapper mapper = new ObjectMapper();
        String jsonString="";
        try {
            jsonString = mapper.writeValueAsString(errorMessage);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return jsonString;
    }

}
