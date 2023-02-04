package com.product.msvproducts.service.reviews;

import com.product.msvproducts.entity.Category;
import com.product.msvproducts.entity.Reviews;
import com.product.msvproducts.repository.CategoryRepository;
import com.product.msvproducts.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements IReviewSevice {
    @Autowired
    private ReviewRepository repository;

    @Override
    public List<Reviews> listAllReviews(){
        return repository.findAll();
    }
    public Reviews getReview(Long id){
        return repository.findById(id).orElse(null);
    }

    @Override
    public Reviews createReview(Reviews review) {
        review.setCreationDate(new Date());
        review.setDescription(review.getDescription());
        review.setStars(review.getStars());
        return repository.save(review);
    }

    @Override
    public Reviews updateReview(Reviews review) {
        Reviews reviewDB = getReview(review.getId());
        if(reviewDB == null){
            return null;
        }
        reviewDB.setDescription(review.getDescription());
        reviewDB.setStars(review.getStars());

        return repository.save(reviewDB);
    }

    @Override
    public void deleteReview(Long id) {
        Reviews reviewDB = getReview(id);
        repository.delete(reviewDB);
    }

    @Override
    public Optional<Reviews> findById(Long id) {
        return repository.findById(id);
    }


}
