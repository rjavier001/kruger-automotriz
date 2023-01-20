package com.product.msvproducts.controller;


import com.product.msvproducts.entity.FeaturedEntity;
import com.product.msvproducts.service.featureds.IDestacadosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/featured")
public class FeaturedController {

    @Autowired
    IDestacadosService service;

    @GetMapping
    public ResponseEntity<List<FeaturedEntity>> listDestacados(){
        List<FeaturedEntity> destacados = new ArrayList<>();
        destacados = service.listAllDestacados();
        if(destacados.isEmpty()){
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(destacados);
    }

    @PostMapping
    public ResponseEntity<FeaturedEntity> createDestacados(@RequestBody FeaturedEntity destacados, BindingResult result){

        if(result.hasErrors()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        FeaturedEntity createdDestacados = service.createDestacados(destacados);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDestacados);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<FeaturedEntity> updateDestacados(@PathVariable(name="id") Long id, @RequestBody FeaturedEntity destacados){
        destacados.setId(id);
        FeaturedEntity destacadosUpdate = service.updateDestacados(destacados);
        if(destacadosUpdate == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(destacadosUpdate);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> deleteDestacados(@PathVariable(name="id") Long id){
        service.deleteDestacados(id);
        return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("Successfully operation. ");
    }

}
