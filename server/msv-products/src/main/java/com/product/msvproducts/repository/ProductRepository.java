package com.product.msvproducts.repository;

import com.product.msvproducts.entity.Product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
    public List<Product> findByDescriptionContaining(String description);

}
