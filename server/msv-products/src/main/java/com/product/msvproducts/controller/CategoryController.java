package com.product.msvproducts.controller;

import com.product.msvproducts.entity.Category;
import com.product.msvproducts.service.category.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    ICategoryService service;

    @GetMapping
    public ResponseEntity<List<Category>> listCategories(){
        List<Category> categories = new ArrayList<>();
        categories = service.listAllCategories();
        if(categories.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(categories);
    }

    @PostMapping("/save")
    public ResponseEntity<Category> createCategory(@RequestBody Category category, BindingResult result){

        if(result.hasErrors()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        Category createdCategory = service.createCategory(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable(name="id") Long id, @RequestBody Category category){
        category.setId(id);
        Category categoryDB = service.updateCategory(category);
        if(categoryDB == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(categoryDB);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable(name="id") Long id){
        service.deleteCategory(id);
        return  ResponseEntity.status(HttpStatus.OK).body("Successfully operation. ");
    }
}
