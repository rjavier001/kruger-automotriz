package com.user.msvusers.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "users_orders")
public class UserOrder {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_id", unique = true)
    private Long orderId;

    @Override
    public boolean equals(Object obj) {
        if(this == obj){
            return true;
        }
        if(!(obj instanceof  UserOrder)){
            return false;
        }

        UserOrder o = (UserOrder) obj;
        return this.orderId != null && this.orderId.equals(o.orderId);
    }
}
