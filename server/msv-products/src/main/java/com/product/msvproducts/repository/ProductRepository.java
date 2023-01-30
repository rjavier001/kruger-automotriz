package com.product.msvproducts.repository;

import com.product.msvproducts.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
