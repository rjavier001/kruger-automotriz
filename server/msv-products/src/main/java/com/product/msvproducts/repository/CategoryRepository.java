package com.product.msvproducts.repository;


import com.product.msvproducts.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository  extends JpaRepository<Category,Long> {
}
