package com.product.msvproducts.service.category;

import com.product.msvproducts.entity.Category;
import com.product.msvproducts.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class CategoryServiceImpl implements ICategoryService{
    @Autowired
    private CategoryRepository repository;

    @Override
    public List<Category> listAllCategories(){
     return repository.findAll();
    }
    public Category getCategory(Long id){
        return repository.findById(id).orElse(null);
    }

    @Override
    public Category createCategory(Category category) {
        category.setCreationDate(new Date());
        category.setDescription(category.getDescription());
        category.setName(category.getName());
        return repository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        Category categoryDB = getCategory(category.getId());
        if(categoryDB == null){
            return null;
        }
        categoryDB.setDescription(category.getDescription());
        categoryDB.setName(category.getName());

        return repository.save(categoryDB);
    }

    @Override
    public void deleteCategory(Long id) {
        Category categoryDB = getCategory(id);
        repository.delete(categoryDB);
    }

}
