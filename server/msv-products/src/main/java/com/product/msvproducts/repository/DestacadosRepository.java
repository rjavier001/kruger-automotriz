package com.product.msvproducts.repository;

import com.product.msvproducts.entity.FeaturedEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DestacadosRepository extends JpaRepository<FeaturedEntity,Long> {
}
