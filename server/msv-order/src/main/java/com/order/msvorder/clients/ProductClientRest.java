package com.order.msvorder.clients;

import com.order.msvorder.model.Product;
import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "msv-products", url = "localhost:8002/api/products")
public interface ProductClientRest {

    public Product listCategories();
}
