package com.user.msvusers.model;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

//  @NotEmpty(message = "Name should not be empty")
//  @NotNull(message = "Name should not be null")
  private String name;

//  @NotEmpty(message = "Email should not be empty")
//  @NotNull(message = "Email should not be null")
  @Column(unique = true)
  private String email;

//  @NotEmpty(message = "Password should not be empty")
//  @NotNull(message = "Password should not be null")
  private String password;

}
