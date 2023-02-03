//package com.kruger.gatewayserver;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/fallback")
//public class FallBackController {
//  @GetMapping("/retailCourseFallback")
//  public ResponseEntity<String> retailCourseFallBack(){
//    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//        .body("We are facing a problem. Please contact helpdesk");
//  }
//
//}
