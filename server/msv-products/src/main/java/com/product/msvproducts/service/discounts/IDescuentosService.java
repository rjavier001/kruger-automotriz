package com.product.msvproducts.service.discounts;

import com.product.msvproducts.entity.Discounts;

import java.util.List;

public interface IDescuentosService {
    public List<Discounts> listAllDescuentos();
    public Discounts getDescuentos(Long id);
    public Discounts createDescuentos(Discounts descuentos);
    public Discounts updateDescuentos(Discounts descuentos);
    public void deleteDescuentos(Long id);
}
