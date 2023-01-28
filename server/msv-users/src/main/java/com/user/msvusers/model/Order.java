package com.user.msvusers.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Order {

    private Long id;

    private Double totalPrice;

    private Date created;

    private String status;

    private String shipmentAddress;

    private Date shipmentDate;
}
