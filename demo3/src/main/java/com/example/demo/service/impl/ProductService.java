package com.example.demo.service.impl;

import com.example.demo.model.Product;
//import com.example.demo.repository.IProductRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService {
//    @Autowired
//    IProductRepository productRepository;
    @Override
    public List<Product> findByAll() {

        return null;
    }

    @Override
    public void save(Product product) {

    }

    @Override
    public void update(Product product) {

    }

    @Override
    public void detele(int id) {

    }

    @Override
    public Page<Product> seachByName(String name, PageRequest pageRequest) {
        return null;
    }
}
