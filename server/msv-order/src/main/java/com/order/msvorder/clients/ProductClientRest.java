package com.order.msvorder.clients;

import com.order.msvorder.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "msv-products", url = "localhost:8002/api/products")
public interface ProductClientRest {

    @GetMapping("/{id}")
    Product detail(@PathVariable Long id);

    @PostMapping("/save")
    Product createProduct(@RequestBody  Product product);

    @GetMapping("/products-by-order")
    List<Product> getAllProductsByOrder(@RequestParam Iterable<Long> ids);

}
