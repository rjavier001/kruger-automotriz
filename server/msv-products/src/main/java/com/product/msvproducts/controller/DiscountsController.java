package com.product.msvproducts.controller;

import com.product.msvproducts.entity.Discounts;
import com.product.msvproducts.service.discounts.IDescuentosService;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/discounts")
public class DiscountsController {

    @Autowired
    IDescuentosService service;

    @GetMapping
    public ResponseEntity<List<Discounts>> listAllDescuentos() {
        List<Discounts> descuentos = new ArrayList<>();
        descuentos = service.listAllDescuentos();
        if (descuentos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(descuentos);
    }

    @PostMapping
    public ResponseEntity<Discounts> createDescuentos(@RequestBody @Valid Discounts descuentos) {
        Discounts createdDescuentos = service.createDescuentos(descuentos);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDescuentos);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Discounts> updateDescuentos(@PathVariable(name = "id") Long id,
            @RequestBody Discounts descuentos) {
        descuentos.setId(id);
        Discounts descuentosUpdate = service.updateDescuentos(descuentos);
        if (descuentosUpdate == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(descuentosUpdate);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteDescuentos(@PathVariable(name = "id") Long id) {
        service.deleteDescuentos(id);

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Successfully operation. ");
    }

}
