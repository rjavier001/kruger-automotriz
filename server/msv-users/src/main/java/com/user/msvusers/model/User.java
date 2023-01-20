package com.user.msvusers.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

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

  @NotEmpty(message = "Email should not be empty")
  @NotNull(message = "Email should not be null")
  @Column(unique = true)
  private String email;

  @NotEmpty(message = "Password should not be empty")
  @NotNull(message = "Password should not be null")
  private String password;

}
