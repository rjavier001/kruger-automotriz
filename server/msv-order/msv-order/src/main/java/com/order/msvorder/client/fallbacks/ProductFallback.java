package com.order.msvorder.client.fallbacks;

import com.order.msvorder.client.ProductClient;
import com.order.msvorder.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;

@Component
public class ProductFallback implements ProductClient {

    @Override
    public ResponseEntity<Product> getProduct(Long id) {
        Product product = new Product();
        product.setCategory(null);
        product.setCreated(new Date());
        product.setDescription("none");
        product.setName("none");
        product.setPhotoUrl("none");
        product.setPrice(0.0);
        product.setReviews(new ArrayList<>());
        product.setSalesCounter(0.0);
        product.setStock(0.0);
        product.setStatus("CREATED");
        return ResponseEntity.ok(product);
    }

    @Override
    public ResponseEntity<Product> updateStockProduct(Long id, Double quantity) {
        Product product = new Product();
        product.setCategory(null);
        product.setCreated(new Date());
        product.setDescription("none");
        product.setName("none");
        product.setPhotoUrl("none");
        product.setPrice(0.0);
        product.setReviews(new ArrayList<>());
        product.setSalesCounter(0.0);
        product.setStock(0.0);
        product.setStatus("CREATED");
        return ResponseEntity.ok(product);
    }

    @Override
    public ResponseEntity<Product> updateSaleCounter(Long id, Double quantity) {
        Product product = new Product();
        product.setCategory(null);
        product.setCreated(new Date());
        product.setDescription("none");
        product.setName("none");
        product.setPhotoUrl("none");
        product.setPrice(0.0);
        product.setReviews(new ArrayList<>());
        product.setSalesCounter(0.0);
        product.setStock(0.0);
        product.setStatus("CREATED");
        return ResponseEntity.ok(product);
    }
    
}
