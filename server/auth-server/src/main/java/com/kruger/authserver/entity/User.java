package com.kruger.authserver.entity;



import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "users")
@Data
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id")
  private Long id;

  private String name;

  private String lastName;

  private String age;

  @Column(unique = true)
  private String email;

  private String phone;

  private String address;

  @OneToOne(mappedBy = "user")
  private AuthUser authUser;
}

