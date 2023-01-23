package com.product.msvproducts.service.product;

import com.product.msvproducts.entity.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    public List<Product> listAllProducts();
    public Product getProduct(Long id);

    Optional<Product> findById(Long id);

    public Product createProduct(Product product);
    public Product updateProduct(Product product);
    public void deleteProduct(Long id);
}
