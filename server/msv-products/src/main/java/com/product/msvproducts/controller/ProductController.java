package com.product.msvproducts.controller;

import com.product.msvproducts.entity.Product;
import com.product.msvproducts.entity.Reviews;
import com.product.msvproducts.service.product.IProductService;


import javax.validation.Valid;

import com.product.msvproducts.service.reviews.ReviewServiceImpl;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    IProductService service;

    @Autowired
    ReviewServiceImpl reviewService;

    @GetMapping
    public ResponseEntity<List<Product>> listCategories(){
        List<Product> products = new ArrayList<>();
        products = service.listAllProducts();
        if(products.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable Long id){
        Optional<Product> productOptional = service.findById(id);
        if(productOptional.isPresent()){
            return ResponseEntity.ok(productOptional.get());
        }
        return ResponseEntity.notFound().build();
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

    @GetMapping("/search")
    public ResponseEntity<?> detail(@RequestParam(name="description", required=false) String description){
        List<Product> products = new ArrayList<>();
        if(description == null){
            products = service.listAllProducts();
            if(products.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }
        else {
            products = service.findByDescription(description);
            if(products.isEmpty()){
                return ResponseEntity.noContent().build();
            }
        }
        
        return ResponseEntity.ok(products);
    }

    @GetMapping("/products-by-order")
    public ResponseEntity<?> getAllProductsByOrder(@RequestParam List<Long> ids){
        return ResponseEntity.ok(service.listByIds(ids));
    }

    @PutMapping("/assign-review/{productId}")
    public ResponseEntity<?> assignReview(@RequestBody Reviews review, @PathVariable Long productId){
        Optional<Reviews> o;
        try{
            o = service.assignReview(review, productId);
        } catch (FeignException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("mensaje","No existe el producto por el id o no se logro la comunicación"+ e.getMessage()));
        }

        if(o.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(o.get());
        }
        return ResponseEntity.notFound().build();
    }


}