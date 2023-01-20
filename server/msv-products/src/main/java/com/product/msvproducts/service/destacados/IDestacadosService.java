package com.product.msvproducts.service.destacados;

import com.product.msvproducts.entity.Destacados;

import java.util.List;

public interface IDestacadosService {
    public List<Destacados> listAllDestacados();
    public Destacados getDestacados(Long id);

    public Destacados createDestacados(Destacados destacados);
    public Destacados updateDestacados(Destacados destacados);
    public void deleteDestacados(Long id);
}
