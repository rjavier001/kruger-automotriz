package com.kruger.authserver.dto;

import com.kruger.authserver.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class AuthUserDto {

  private String userName;
  private String password;
  private String role;
  private User user;
}