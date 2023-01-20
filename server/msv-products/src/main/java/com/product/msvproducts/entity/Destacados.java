package com.product.msvproducts.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "destacados")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Destacados {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "destacado_id")
    private List<Product> products;

    @Column(name = "time_destacado")
    @Temporal(TemporalType.TIMESTAMP)
    private Date timedestacado;

    @Column(name = "created")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;
}
