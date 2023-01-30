package com.user.msvusers.clients;

import com.user.msvusers.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@FeignClient(name = "msv-products", url = "localhost:8002")
public interface ProductsClientRest {

    @GetMapping
    public Product listCategories();

    @PostMapping("/save")
    public Product createProduct(@RequestBody Product product);

}
