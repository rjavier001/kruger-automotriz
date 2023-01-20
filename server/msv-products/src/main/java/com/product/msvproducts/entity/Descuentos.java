package com.product.msvproducts.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "descuentos")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Descuentos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "descuento_id")
    private List<Product> products;

    private String name;
    private String description;
    private Double price;
    @Column(name = "time_oferta")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timeOferta;

    @Column(name = "created")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;
}
