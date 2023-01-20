package com.order.msvorder.model;

import lombok.Data;

import java.util.Date;

@Data
public class Review {

    private Long id;

    private Long raiting;

    private String text;

    private Long productId;

    private Date created;
}
