package com.product.msvproducts.controller;

import com.product.msvproducts.entity.Product;
import com.product.msvproducts.service.product.IProductService;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/products")
public class ProductController {

    @Autowired
    IProductService service;

    @GetMapping
    public ResponseEntity<List<Product>> listCategories(){
        List<Product> products = new ArrayList<>();
        products = service.listAllProducts();
        if(products.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }

    @PostMapping("/save")
    public ResponseEntity<Product> createProduct(@RequestBody @Valid Product product){
        Product createdProduct = service.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable(name="id") Long id, @RequestBody Product product){
        product.setId(id);
        Product productDB = service.updateProduct(product);
        if(productDB == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productDB);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable(name="id") Long id){
        service.deleteProduct(id);
        return  ResponseEntity.status(HttpStatus.OK).body("Successfully operation. ");
    }

}