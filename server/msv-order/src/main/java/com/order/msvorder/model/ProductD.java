package com.order.msvorder.model;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ProductD {

    private Long id;

    private String name;

    private String description;
    
    private Double price;

    private Double stock;

    private String status;

    private Double salesCounter;

    private String photoUrl;

    private Date created;

    private Category category;
    
    private List<Review> reviews;
}
