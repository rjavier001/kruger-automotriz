package com.product.msvproducts.service.discounts;

import com.product.msvproducts.entity.Discounts;
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
    public List<Discounts> listAllDescuentos() {
        return repository.findAll();
    }

    @Override
    public Discounts getDescuentos(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Discounts createDescuentos(Discounts descuentos) {
         descuentos.setCreationDate(new Date());
         return repository.save(descuentos);
    }

    @Override
    public Discounts updateDescuentos(Discounts descuentos) {
        Discounts descuentosUpdate = getDescuentos(descuentos.getId());
        if(descuentosUpdate == null){
            return null;
        }
        return repository.save(descuentosUpdate);
    }

    @Override
    public void deleteDescuentos(Long id) {
        Discounts descuentosDelete = getDescuentos(id);
        repository.delete(descuentosDelete);
    }
}
