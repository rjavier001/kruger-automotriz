package com.product.msvproducts.service.featureds;


import com.product.msvproducts.entity.FeaturedEntity;

import java.util.List;
import java.util.Optional;

public interface IDestacadosService {
    public List<FeaturedEntity> listAllDestacados();
    public FeaturedEntity getDestacados(Long id);
    Optional<FeaturedEntity> findById(Long id);
    public FeaturedEntity createDestacados(FeaturedEntity destacados);
    public FeaturedEntity updateDestacados(FeaturedEntity destacados);
    public void deleteDestacados(Long id);
}
