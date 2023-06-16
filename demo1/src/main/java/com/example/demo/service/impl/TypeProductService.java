package com.example.demo.service.impl;

import com.example.demo.model.TypeProduct;
import com.example.demo.repository.ITypeProductRepository;
import com.example.demo.service.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeProductService implements ITypeProductService {

    @Autowired
    ITypeProductRepository productRepository;

    @Override
    public List<TypeProduct> findBy() {
        return productRepository.findAllBy();
    }
}
