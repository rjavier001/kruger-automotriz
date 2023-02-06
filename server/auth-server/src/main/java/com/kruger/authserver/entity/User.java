package com.kruger.authserver.entity;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {

  private Long id;

  private String name;

  private String lastName;

  private String age;

  private String email;

  private String phone;

  private int user_id;
}
