package com.order.msvorder.services.order;

import com.order.msvorder.entity.Order;
import com.order.msvorder.model.Product;


import java.util.List;
import java.util.Optional;

public interface IOrderService {

    public List<Order> findAllOrders();

    Order save(Order order);

    public Order createOrder(Order Order, Long customerId);
    public Order updateOrder(Order Order);
    public void deleteOrder(Long id);

    public Order getOrder(Long id);

    List<Order> listByIds(Iterable<Long> ids);

    //Metodos remotos
    //Recibe el objeto dle producto y el id de la orden
    Optional<Product> assignProduct(Product product, Long orderId);
    //Este metodo no se lo voy  a implementar , crea un producto nuevo
    //Optional<Product> createProduct(Product product, Long orderId);
    Optional<Product> deleteProduct(Product product, Long orderId);


}
