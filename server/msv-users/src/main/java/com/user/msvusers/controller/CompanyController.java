//package com.user.msvusers.controller;
//
//import com.user.msvusers.model.entity.Company;
//import com.user.msvusers.service.ICompanyService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/company")
//public class CompanyController {
//
//  @Autowired
//  private ICompanyService service;
//
//  @GetMapping("/all")
//  public List<Company> getAllCompany(){
//    return service.findAll();
//  }
//
//  @GetMapping("/{id}")
//  public ResponseEntity<?> getCompanyById(@PathVariable Long id){
//    Optional<Company> optionalCompany=service.findById(id);
//    if(optionalCompany.isPresent()){
//      return new ResponseEntity<>(optionalCompany.get(), HttpStatus.OK);
//    }
//    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//  }
//
//  @PostMapping("/save")
//  public ResponseEntity<?> createCompany(@RequestBody Company user){
//    return new ResponseEntity<>(service.save(user),HttpStatus.CREATED);
//  }
//
//  @PutMapping("/{id}")
//  public ResponseEntity<?> editCompany(@RequestBody Company req,@PathVariable Long id){
//    Optional<Company> optionalCompany= service.findById(id);
//    if(optionalCompany.isPresent()){
//      Company companyDB=optionalCompany.get();
//      companyDB.setCompanyName(req.getCompanyName());
//      companyDB.setDescription(req.getDescription());
//      companyDB.setAddress(req.getAddress());
//      return new ResponseEntity<>(service.save(companyDB),HttpStatus.CREATED);
//    }
//    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//  }
//
//  @DeleteMapping("/{id}")
//  public ResponseEntity<?> deleteCompany(@PathVariable Long id){
//    Optional<Company> optionalCompany = service.findById(id);
//    if(optionalCompany.isPresent()){
//      service.delete(id);
//      return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
//    }
//    return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
//  }
//
//}
