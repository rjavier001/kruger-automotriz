package com.product.msvproducts.service.product;

import com.product.msvproducts.entity.Product;

import java.util.List;

public interface IProductService {
    public List<Product> listAllProducts();
    public Product getProduct(Long id);

    public Product createProduct(Product product);
    public Product updateProduct(Product product);
    public void deleteProduct(Long id);
}
