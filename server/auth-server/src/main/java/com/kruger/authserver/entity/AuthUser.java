package com.kruger.authserver.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table(name = "auth")
public class AuthUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String userName;
  private String password;
  private String role;
}