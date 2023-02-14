package com.product.msvproducts;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class MsvProductsApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsvProductsApplication.class, args);
    }

   /* public static void run() throws ExecutionException, InterruptedException, IOException {
        try(SearchClient searchClient = DefaultSearchClient.create("STF3VI4F0V","ebafaf8b16373dded67356b9e639bc2a")){
            {
                SearchIndex<Product> index = searchClient.initIndex("krugermotors", Product.class);

            }
        }
    }
    */

}



