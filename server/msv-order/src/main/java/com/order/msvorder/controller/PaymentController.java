package com.order.msvorder.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.order.msvorder.entity.Payment;
import com.order.msvorder.services.payment.PaymentServiceImpl;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/payments")
public class PaymentController {
    @Autowired
    PaymentServiceImpl paymentService;

    @PostMapping("/placePayment")
    public ResponseEntity<Payment> createPayment (@Valid @RequestBody Payment payment, BindingResult result){
        if (result.hasErrors()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, this.formatMessage(result));
        }
        Payment paymentDB = paymentService.createPayment(payment);

        return  ResponseEntity.status( HttpStatus.CREATED).body(paymentDB);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Payment> updatePayment (@PathVariable("id") long id, @RequestBody Payment payment){
        payment.setId(id);
        Payment currentPayment = paymentService.updatePayment(payment);
        if (currentPayment == null) {
            return  ResponseEntity.notFound().build();
        }

        return  ResponseEntity.ok(currentPayment);
    }

    @GetMapping
    public ResponseEntity<List<Payment>> listAllOrders(){
        List<Payment> payments = paymentService.findAllPayments();
        return ResponseEntity.ok(payments);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Payment> getPayment(@PathVariable("id")long id){
        Payment payment = paymentService.getPayment(id);
        return ResponseEntity.ok(payment);
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
