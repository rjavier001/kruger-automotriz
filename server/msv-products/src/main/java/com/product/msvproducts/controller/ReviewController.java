package com.product.msvproducts.controller;

import com.product.msvproducts.entity.Category;
import com.product.msvproducts.entity.Reviews;
import com.product.msvproducts.service.category.ICategoryService;
import com.product.msvproducts.service.reviews.IReviewSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    IReviewSevice service;

    @GetMapping
    public ResponseEntity<List<Reviews>> listReviews(){
        List<Reviews> reviews = new ArrayList<>();
        reviews = service.listAllReviews();
        if(reviews.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(reviews);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable Long id){
        Optional<Reviews> productOptional = service.findById(id);
        if(productOptional.isPresent()){
            return ResponseEntity.ok(productOptional.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/save")
    public ResponseEntity<Reviews> createReview(@RequestBody @Valid Reviews review){
        Reviews createdReview = service.createReview(review);
        return ResponseEntity.accepted().body(createdReview);
    }

    @PutMapping(value="/{id}")
    public ResponseEntity<Reviews> updatedReview(@PathVariable(name="id") Long id, @RequestBody Reviews review){
        review.setId(id);
        Reviews reviewDB = service.updateReview(review);
        if(reviewDB == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(reviewDB);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable(name="id") Long id){
        service.deleteReview(id);
        return  ResponseEntity.status(HttpStatus.OK).body("Successfully operation. ");
    }
}
