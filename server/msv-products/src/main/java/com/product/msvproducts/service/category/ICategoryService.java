package com.product.msvproducts.service.category;

import com.product.msvproducts.entity.Category;

import java.util.List;

public interface ICategoryService {
    public List<Category> listAllCategories();
    public Category getCategory(Long id);
    public Category createCategory(Category category);
    public Category updateCategory(Category category);
    public void deleteCategory(Long id);

}
