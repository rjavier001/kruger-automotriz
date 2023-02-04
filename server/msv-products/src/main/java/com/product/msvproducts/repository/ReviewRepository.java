package com.product.msvproducts.repository;

import com.product.msvproducts.entity.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Reviews,Long> {
}
