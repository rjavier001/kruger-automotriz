package com.product.msvproducts.service.destacados;

import com.product.msvproducts.entity.Destacados;
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
    public List<Destacados> listAllDestacados() {
        return repository.findAll();
    }

    @Override
    public Destacados getDestacados(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Destacados createDestacados(Destacados destacados) {
        destacados.setCreated(new Date());
        return repository.save(destacados);
    }

    @Override
    public Destacados updateDestacados(Destacados destacados) {
        Destacados destacadosUpdate = getDestacados(destacados.getId());
        if(destacadosUpdate == null){
            return null;
        }
        return repository.save(destacadosUpdate);
    }

    @Override
    public void deleteDestacados(Long id) {
        Destacados destacadosDelete = getDestacados(id);
        repository.delete(destacadosDelete);
    }
}
