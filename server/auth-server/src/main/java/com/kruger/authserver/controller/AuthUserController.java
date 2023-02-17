package com.kruger.authserver.controller;

import com.kruger.authserver.dto.AuthDto;
import com.kruger.authserver.dto.AuthUserDto;
import com.kruger.authserver.dto.TokenDto;
import com.kruger.authserver.entity.AuthUser;
import com.kruger.authserver.entity.User;
import com.kruger.authserver.service.AuthUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthUserController {

  @Autowired
  AuthUserService authUserService;

  @GetMapping()
  public ResponseEntity<TokenDto> validateAuthUser(HttpServletRequest request) {
    String jwt = request.getHeader("Authorization").replace("Bearer ", "");
    if (jwt == null) {
      return ResponseEntity.badRequest().build();
    }
    TokenDto tokenDto = authUserService.validateAuthUser(jwt);
    if (tokenDto == null)
      return ResponseEntity.badRequest().build();
    return ResponseEntity.ok(tokenDto);
  }

  @PostMapping("/sign-in")
  public ResponseEntity<?> login(@RequestBody AuthUserDto dto) {
    TokenDto tokenDto = authUserService.login(dto);
    if (tokenDto == null)
      return new ResponseEntity<>("Login fail please check username and password", HttpStatus.BAD_REQUEST);
    return ResponseEntity.ok(tokenDto);
  }

  @PostMapping("/validate")
  public ResponseEntity<TokenDto> validate(@RequestParam String token) {
    TokenDto tokenDto = authUserService.validate(token);
    if (tokenDto == null)
      return ResponseEntity.badRequest().build();
    return ResponseEntity.ok(tokenDto);
  }

  @PostMapping("/sign-up")
  public ResponseEntity<?> create(@RequestBody AuthUserDto dto) {
    TokenDto tokenDto = authUserService.save(dto);
    if (tokenDto == null)
      return new ResponseEntity<>("Error to save user please check data", HttpStatus.BAD_REQUEST);
    return ResponseEntity.ok(tokenDto);
  }

  @PutMapping("/update-password")
  public ResponseEntity<?> updatePassword(@RequestBody AuthDto dto) {
    TokenDto tokenDto = authUserService.update(dto);
    if (tokenDto == null)
      return new ResponseEntity<>("Error to update password please check data", HttpStatus.BAD_REQUEST);
    return ResponseEntity.ok().build();
  }
}