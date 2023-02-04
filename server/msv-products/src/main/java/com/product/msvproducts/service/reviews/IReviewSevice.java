package com.product.msvproducts.service.reviews;


import com.product.msvproducts.entity.Reviews;

import java.util.List;
import java.util.Optional;

public interface IReviewSevice {

    public List<Reviews> listAllReviews();
    public Reviews getReview(Long id);
    public Reviews createReview(Reviews review);
    Optional<Reviews> findById(Long id);
    public Reviews updateReview(Reviews review);
    public void deleteReview(Long id);



}
