package com.order.msvorder.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "order_product")
public class OrderProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Con la regla unique not nemos repetido el mismo product en la order
    //@Column(name = "product_id", unique = true)
    private Long productId;

    @Override
    public boolean equals(Object obj) {
        if(this == obj){
            return true;
        }
        if(!(obj instanceof OrderProduct)){
            return false;
        }

        OrderProduct o = (OrderProduct) obj;
        return this.productId != null && this.productId.equals(o.productId);

    }
}
