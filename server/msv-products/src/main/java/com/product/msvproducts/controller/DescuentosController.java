package com.product.msvproducts.controller;

import com.product.msvproducts.entity.Descuentos;
import com.product.msvproducts.service.descuentos.IDescuentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/descuento")
public class DescuentosController {

    @Autowired
    IDescuentosService service;

    @GetMapping
    public ResponseEntity<List<Descuentos>> listAllDescuentos(){
        List<Descuentos> descuentos = new ArrayList<>();
        descuentos = service.listAllDescuentos();
        if(descuentos.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(descuentos);
    }

    @PostMapping
    public ResponseEntity<Descuentos> createDescuentos(@RequestBody Descuentos descuentos, BindingResult result){

        if(result.hasErrors()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        Descuentos createdDescuentos = service.createDescuentos(descuentos);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDescuentos);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Descuentos> updateDescuentos(@PathVariable(name="id") Long id, @RequestBody Descuentos descuentos){
        descuentos.setId(id);
        Descuentos descuentosUpdate = service.updateDescuentos(descuentos);
        if(descuentosUpdate == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(descuentosUpdate);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> deleteDescuentos(@PathVariable(name="id") Long id){
        service.deleteDescuentos(id);

        return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("Successfully operation. ");
    }

}
