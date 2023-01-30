package com.order.msvorder.model;

import lombok.Data;

import java.util.Date;

@Data
public class Category {

    private Long id;

    private String name;    

    private String description;

    //private Date created;
    private Date creationDate;

}
