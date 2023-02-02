package com.product.msvproducts.service.category;

import com.product.msvproducts.entity.Category;

import java.util.List;
import java.util.Optional;

public interface ICategoryService {
    public List<Category> listAllCategories();
    public Category getCategory(Long id);
    public Category createCategory(Category category);
    Optional<Category> findById(Long id);
    public Category updateCategory(Category category);
    public void deleteCategory(Long id);

}
