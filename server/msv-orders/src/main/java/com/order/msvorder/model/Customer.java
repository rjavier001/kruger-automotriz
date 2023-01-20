package com.order.msvorder.model;

import lombok.Data;

import java.util.Date;

@Data
public class Customer {
    private Long id;

    private String name;

    private String email;

    private String password;

    private boolean verified;

    private Date signDate = new Date();

    private Role role;
}
