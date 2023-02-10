package com.order.msvorder.services.order;

import com.order.msvorder.entity.Order;
import com.order.msvorder.entity.OrderProduct;
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

    Optional<Order> findByIdWithProducts(Long id);

    //Metodos remotos
    //Recibe el objeto dle producto y el id de la orden
    Optional<Order> assignProduct(OrderProduct orderProduct, Long orderId);
    //Este metodo no se lo voy  a implementar , crea un producto nuevo
    //Optional<Product> createProduct(Product product, Long orderId);
    //Elimina el producto de la orden no de la BDD
    Optional<Product> deleteProduct(Product product, Long orderId);


}
