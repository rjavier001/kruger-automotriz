package com.product.msvproducts.service.descuentos;

import com.product.msvproducts.entity.Descuentos;

import java.util.List;

public interface IDescuentosService {
    public List<Descuentos> listAllDescuentos();
    public Descuentos getDescuentos(Long id);
    public Descuentos createDescuentos(Descuentos descuentos);
    public Descuentos updateDescuentos(Descuentos descuentos);
    public void deleteDescuentos(Long id);
}
