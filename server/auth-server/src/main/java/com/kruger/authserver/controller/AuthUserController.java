package com.kruger.authserver.controller;


import com.kruger.authserver.dto.AuthUserDto;
import com.kruger.authserver.dto.TokenDto;
import com.kruger.authserver.entity.AuthUser;
import com.kruger.authserver.service.AuthUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthUserController {

  @Autowired
  AuthUserService authUserService;

  @PostMapping("/login")
  public ResponseEntity<TokenDto> login(@RequestBody AuthUserDto dto){
    TokenDto tokenDto = authUserService.login(dto);
    if(tokenDto == null)
      return ResponseEntity.badRequest().build();
    return ResponseEntity.ok(tokenDto);
  }

  @PostMapping("/validate")
  public ResponseEntity<TokenDto> validate(@RequestParam String token){
    TokenDto tokenDto = authUserService.validate(token);
    if(tokenDto == null)
      return ResponseEntity.badRequest().build();
    return ResponseEntity.ok(tokenDto);
  }

  @PostMapping("/create")
  public ResponseEntity<AuthUser> create(@RequestBody AuthUserDto dto){
    AuthUser authUser = authUserService.save(dto);
    if(authUser == null)
      return ResponseEntity.badRequest().build();
    return ResponseEntity.ok(authUser);
  }
}