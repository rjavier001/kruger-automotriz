//package com.kruger.gatewayserver;
//
//
//import org.springframework.cloud.gateway.route.RouteLocator;
//import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class ConfigurationGateway {
// @Bean
// public RouteLocator configureRoute(RouteLocatorBuilder builder) {
//   return builder.routes()
//       .route("users", r->r.path("/api/users/**").uri("lb://msv-users"))
//       .build();
// }
//}
