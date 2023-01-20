package com.product.msvproducts.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "discounts")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Descuentos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "discount_id")
    private List<Product> products;

    //campo requerido
    private String name;
    private String description;
    //campo requerido
    private Double price;

    @Column(name = "time_oferta")
    private String offerTime;

    @Column(name = "creationDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;
}
