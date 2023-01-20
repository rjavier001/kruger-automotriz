package com.order.msvorder.entity;

import com.order.msvorder.model.Product;
import javax.persistence.*;
import javax.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * This microservice was created by Kevin and David
 */
@Data
@Entity
@Table(name="orderItems")
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Positive(message = "La cantidad debe ser mayor que cero")
    private Double quantity;

    private Double  price;

    @Column(name = "product_id")
    private Long productId;

    @Transient
    private Double subTotal;

    @Transient
    private Product product;

    @Temporal(TemporalType.DATE)
    private Date created;


    public Double getSubTotal(){
        if (this.price >0  && this.quantity >0 ){
            return this.quantity * this.price;
        }else {
            return (double) 0;
        }
    }
}
