package com.product.msvproducts.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import javax.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Entity
@Table(name ="products")
@Data
@AllArgsConstructor @NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotEmpty(message = "Name should not be empty")
    @NotNull(message = "Name should not be null")
    private String name;

    private String description;

    @NotNull(message = "Price should not be empty")
    @Min(3)
    @Max(1000)
    private Double price;

    private Double size;

    private Double weight;

    @NotNull(message = "Stock should not be empty")
    @Min(3)
    @Max(1000)
    private Double stock;

    @NotNull(message = "Purchase Price should not be empty")
    @Min(3)
    @Max(1000)
    private Double purchasePrice;

    @NotNull(message = "Sales Price should not be empty")
    @Min(3)
    @Max(1000)
    private Double salePrice;

    @Column(name = "photo_url")
    private String photoUrl;

    @Column(name = "creationDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;

    @Column(name = "featured_id")
    private Long featuredId;

    @Column(name = "discount_id")
    private Long discountId;

    @Column(name = "objectID")
    private Integer objectID;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    private Category category;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "review_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    private List<Reviews> review;

    public void addReview(Reviews reviews){
        review.add(reviews);
    }
}
