package com.user.msvusers.service;

import com.user.msvusers.model.entity.Company;
import com.user.msvusers.model.entity.User;

import java.util.List;
import java.util.Optional;


public interface ICompanyService {
  List<Company> findAll();
  Optional<Company> findById(Long id);
  Company save(Company company);
  void delete(Long id);

}
