package com.kruger.authserver.dto;

import com.kruger.authserver.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TokenDto {
  private String token;
  private String userName;
  private String role;
  private int authId;
  private Long userId;
}