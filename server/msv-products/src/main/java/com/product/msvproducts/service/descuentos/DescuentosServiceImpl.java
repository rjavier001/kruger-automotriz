package com.product.msvproducts.service.descuentos;

import com.product.msvproducts.entity.Descuentos;
import com.product.msvproducts.repository.DescuentosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DescuentosServiceImpl implements IDescuentosService{

    @Autowired
    DescuentosRepository repository;

    @Override
    public List<Descuentos> listAllDescuentos() {
        return repository.findAll();
    }

    @Override
    public Descuentos getDescuentos(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Descuentos createDescuentos(Descuentos descuentos) {
         descuentos.setCreated(new Date());
         return repository.save(descuentos);
    }

    @Override
    public Descuentos updateDescuentos(Descuentos descuentos) {
        Descuentos descuentosUpdate = getDescuentos(descuentos.getId());
        if(descuentosUpdate == null){
            return null;
        }
        return repository.save(descuentosUpdate);
    }

    @Override
    public void deleteDescuentos(Long id) {
        Descuentos descuentosDelete = getDescuentos(id);
        repository.delete(descuentosDelete);
    }
}
