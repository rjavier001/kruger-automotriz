package com.product.msvproducts.service.featureds;


import com.product.msvproducts.entity.FeaturedEntity;
import com.product.msvproducts.repository.DestacadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class DestacadosServiceImpl implements IDestacadosService{

    @Autowired
    private DestacadosRepository repository;
    @Override
    public List<FeaturedEntity> listAllDestacados() {
        return repository.findAll();
    }

    @Override
    public FeaturedEntity getDestacados(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public FeaturedEntity createDestacados(FeaturedEntity destacados) {
        destacados.setCreationDate(new Date());
        return repository.save(destacados);
    }

    @Override
    public FeaturedEntity updateDestacados(FeaturedEntity destacados) {
        FeaturedEntity destacadosUpdate = getDestacados(destacados.getId());
        if(destacadosUpdate == null){
            return null;
        }
        return repository.save(destacadosUpdate);
    }

    @Override
    public void deleteDestacados(Long id) {
        FeaturedEntity destacadosDelete = getDestacados(id);
        repository.delete(destacadosDelete);
    }
}
