package com.product.msvproducts.service.discounts;

import com.product.msvproducts.entity.Discounts;

import java.util.List;
import java.util.Optional;

public interface IDescuentosService {
    public List<Discounts> listAllDescuentos();
    Optional<Discounts> findById(Long id);
    public Discounts getDescuentos(Long id);
    public Discounts createDescuentos(Discounts descuentos);
    public Discounts updateDescuentos(Discounts discounts);
    public void deleteDescuentos(Long id);
}
