package com.order.msvorder.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import javax.validation.Valid;

import com.order.msvorder.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Data
@Entity
@Table(name="orders")
@AllArgsConstructor
//@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "total_price")
    private Double totalPrice;

    @Temporal(TemporalType.DATE)
    private Date created;

    private String status;

    @Column(name="shipment_address")
    private String shipmentAddress;

    @Temporal(TemporalType.DATE)
    @Column(name="shipment_date")
    private Date shipmentDate;

/*
    @Valid
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<OrderItem> items;

 */


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "order_id")
    private List<OrderProduct> orderProducts;

    @Transient
    private List<Product> products;

    public Order() {
        orderProducts = new ArrayList<>();
        products = new ArrayList<>();
    }

    public void addOrderProduct(OrderProduct orderProduct){
        orderProducts.add(orderProduct);
    }
    public void removeOrderProduct(OrderProduct orderProduct){
        orderProducts.remove((orderProduct));
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id")
    private Payment payment;
}
