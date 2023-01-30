package com.order.msvorder.model;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Product {

    private Long id;

    private String name;

    private String description;

    private Double price;

    private Double stock;

    private Double purchasePrice;

    private Double salePrice;

    private String photoUrl;

    private Date creationDate;

    private Long featuredId;

    private Long discountId;

    private Category category;

}
