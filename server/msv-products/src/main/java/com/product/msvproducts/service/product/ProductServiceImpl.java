package com.product.msvproducts.service.product;

import com.product.msvproducts.entity.Product;
import com.product.msvproducts.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IProductService{

    @Autowired
    private ProductRepository repository;
    @Override
    public List<Product> listAllProducts() {
        return repository.findAll();
    }

    @Override
    public Product getProduct(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Optional<Product> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Product createProduct(Product product) {
        product.setCreationDate(new Date());
        return repository.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        Product productUpdate = getProduct(product.getId());
        if(productUpdate == null){
            return null;
        }
        productUpdate.setCategory(product.getCategory());
        productUpdate.setName(product.getName());
        productUpdate.setDescription(product.getDescription());
        productUpdate.setPrice(product.getPrice());
        productUpdate.setStock(product.getStock());
        productUpdate.setPurchasePrice(product.getPurchasePrice());
        productUpdate.setSalePrice(product.getSalePrice());
        productUpdate.setPhotoUrl(product.getPhotoUrl());
        productUpdate.setFeaturedId(product.getFeaturedId());
        productUpdate.setDiscountId(product.getDiscountId());
        return repository.save(productUpdate);
    }

    @Override
    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}
