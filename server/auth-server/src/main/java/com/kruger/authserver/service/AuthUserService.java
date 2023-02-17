package com.kruger.authserver.service;

import com.kruger.authserver.dto.AuthDto;
import com.kruger.authserver.dto.AuthUserDto;
import com.kruger.authserver.dto.TokenDto;
import com.kruger.authserver.entity.AuthUser;
import com.kruger.authserver.repository.AuthUserRepository;
import com.kruger.authserver.repository.UserRepository;
import com.kruger.authserver.security.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class AuthUserService {

  @Autowired
  AuthUserRepository authUserRepository;

  @Autowired
  UserRepository userRepository;

  @Autowired
  PasswordEncoder passwordEncoder;

  @Autowired
  JwtProvider jwtProvider;

  public TokenDto save(AuthUserDto dto) {
    Optional<AuthUser> user = authUserRepository.findByUserName(dto.getUserName());
    if (user.isPresent())
      return null;
    String password = passwordEncoder.encode(dto.getPassword());
    AuthUser authUser = AuthUser.builder()
        .userName(dto.getUserName())
        .password(password)
        .role(dto.getRole())
        .user(dto.getUser())
        .build();
    authUserRepository.save(authUser);
    Optional<AuthUser> userLogin = authUserRepository.findByUserName(dto.getUserName());
    return new TokenDto(jwtProvider.createToken(userLogin.get()), userLogin.get().getUserName(),
        userLogin.get().getRole(), userLogin.get().getId(), userLogin.get().getUser().getId());
  }

  public TokenDto update(AuthDto dto) {
    Optional<AuthUser> user = authUserRepository.findByUserName(dto.getUserName());
    if (!user.isPresent())
      return null;
    if (passwordEncoder.matches(dto.getOldPassword(), user.get().getPassword())) {
      String password = passwordEncoder.encode(dto.getNewPassword());
      AuthUser authUser = user.get();
      authUser.setPassword(password);
      authUserRepository.save(authUser);
      Optional<AuthUser> userLogin = authUserRepository.findByUserName(dto.getUserName());
      return new TokenDto(jwtProvider.createToken(userLogin.get()), userLogin.get().getUserName(),
          userLogin.get().getRole(), userLogin.get().getId(), userLogin.get().getUser().getId());
    }
    return null;
  }

  public TokenDto validateAuthUser(String token) {
    if (!jwtProvider.validate(token))
      return null;
    String username = jwtProvider.getUserNameFromToken(token);
    if (!authUserRepository.findByUserName(username).isPresent())
      return null;
    Optional<AuthUser> authUser = authUserRepository.findByUserName(username);
    return new TokenDto(token, username, authUser.get().getRole(), authUser.get().getId(),
        authUser.get().getUser().getId());
  }

  public TokenDto login(AuthUserDto dto) {
    Optional<AuthUser> user = authUserRepository.findByUserName(dto.getUserName());
    if (!user.isPresent())
      return null;
    if (passwordEncoder.matches(dto.getPassword(), user.get().getPassword()))
      return new TokenDto(jwtProvider.createToken(user.get()), user.get().getUserName(), user.get().getRole(),
          user.get().getId(), user.get().getUser().getId());
    return null;
  }

  public TokenDto validate(String token) {
    if (!jwtProvider.validate(token))
      return null;
    String username = jwtProvider.getUserNameFromToken(token);
    if (!authUserRepository.findByUserName(username).isPresent())
      return null;
    Optional<AuthUser> authUser = authUserRepository.findByUserName(username);
    return new TokenDto(token, username, authUser.get().getRole(), authUser.get().getId(),
        authUser.get().getUser().getId());
  }
}