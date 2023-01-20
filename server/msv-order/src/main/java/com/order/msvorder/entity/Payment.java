package com.order.msvorder.entity;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name="payments")
@Getter
@Setter
public class Payment {

    public Payment() {
    }

    public Payment(String status, UUID payPallPaymentId, Date created, Order order) {
        this.status = status;
        this.payPallPaymentId = payPallPaymentId;
        this.created = created;
        this.order = order;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String status;

    private UUID payPallPaymentId;

    @Temporal(TemporalType.DATE)
    private Date created;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private Order order;


}
