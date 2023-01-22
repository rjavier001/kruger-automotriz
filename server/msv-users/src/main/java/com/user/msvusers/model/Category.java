package com.user.msvusers.model;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Category {

    private Long id;

    private String name;

    private String description;

    private Date creationDate;

}
