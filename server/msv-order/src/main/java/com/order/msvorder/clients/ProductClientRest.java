package com.order.msvorder.clients;

import com.order.msvorder.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

@FeignClient(name = "msv-products", url = "localhost:8002/api/products")
public interface ProductClientRest {

    @GetMapping("/{id}")
    Product detail(@PathVariable Long id);

    @PostMapping("/save")
    Product createProduct(@RequestBody  Product product);

}
