package com.user.msvusers.service;


import com.user.msvusers.model.entity.Company;
import com.user.msvusers.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements ICompanyService{


  @Autowired
  private CompanyRepository repository;


  @Override
  @Transactional(readOnly = true)
  public List<Company> findAll() {
    return (List<Company>) repository.findAll() ;
  }

  @Override
  @Transactional(readOnly = true)
  public Optional<Company> findById(Long id) {
      return repository.findById(id);
  }

  @Override
  @Transactional
  public Company save(Company company) {
      return repository.save(company);
  }

  @Override
  @Transactional
  public void delete(Long id) {
      repository.deleteById(id);
  }
}
