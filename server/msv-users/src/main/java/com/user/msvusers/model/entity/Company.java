package com.user.msvusers.model.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@Getter
@Setter
@Entity
@Table(name="company")
@Data
public class Company {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotEmpty(message = "Name should not be empty")
  @NotNull(message = "Name should not be null")
  private String companyName;

  @NotEmpty(message = "Description should not be empty")
  @NotNull(message = "Description should not be null")
  @Column(unique = true)
  private String description;

  @NotEmpty(message = "Address should not be empty")
  @NotNull(message = "Address should not be null")
  private String address;

}
