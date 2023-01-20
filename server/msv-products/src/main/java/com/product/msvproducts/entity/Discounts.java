package com.product.msvproducts.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "discounts")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Discounts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "discount_id")
    private List<Product> products;

    @NotEmpty(message = "Name should not be empty")
    @NotNull(message = "Name should not be null")
    private String name;
    
    private String description;

    @NotNull(message = "Price should not be empty")
    @Min(3)
    @Max(100)
    private Double price;

    @Column(name = "time_oferta")
    private String offerTime;

    @Column(name = "creationDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;
}
