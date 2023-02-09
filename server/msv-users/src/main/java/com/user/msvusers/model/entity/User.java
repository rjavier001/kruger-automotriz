package com.user.msvusers.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.user.msvusers.model.Order;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "users")
@Data
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotEmpty(message = "Name should not be empty")
  @NotNull(message = "Name should not be null")
  private String name;


  @NotEmpty(message = "LastName should not be empty")
  @NotNull(message = "LastName should not be null")
  private String lastName;

  @NotEmpty(message = "Age should not be empty")
  @NotNull(message = "Age should not be null")
  private String age;


  @NotEmpty(message = "Email should not be empty")
  @NotNull(message = "Email should not be null")
  @Column(unique = true)
  private String email;

//  @NotEmpty(message = "Password should not be empty")
//  @NotNull(message = "Password should not be null")
//  private String password;

  @NotEmpty(message = "Phone should not be empty")
  @NotNull(message = "Phone should not be null")
  private String phone;


//  @NotEmpty(message = "Role should not be empty")
//  @NotNull(message = "Role should not be null")
//  private String role;
//
//  @OneToOne(cascade = CascadeType.ALL)
//  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private int user_id;


  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "user_id")
  private List<UserOrder> userOrders;

  public void addUserOrder(UserOrder userOrder){
    userOrders.add(userOrder);
  }
  public void  removeUserOrder(UserOrder userOrder){
    userOrders.remove(userOrder);
  }

  @Transient
  private List<Order> orders;

  public User() {
    userOrders = new ArrayList<>();
    orders = new ArrayList<>();
  }

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "company_id")
  @JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
  private Company company;
}
