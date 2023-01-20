//package com.kruger.gatewayservice;
//
//
//import org.springframework.cloud.gateway.route.RouteLocator;
//import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class ConfigurationGateway {
//  @Bean
//  public RouteLocator configureRoute(RouteLocatorBuilder builder) {
//    return builder.routes()
//        .route("course", r->r.path("/api/course/**").uri("lb://MSVC-COURSE"))
//        .route("user", r->r.path("/api/user/**").uri("lb://MSVC-USER"))
//        .build();
//  }
//}
