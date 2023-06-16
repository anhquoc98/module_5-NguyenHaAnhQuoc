package com.example.demo.service;

import com.example.demo.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List <Product> findByAll();
    void save(Product product);
    void update(Product product);
    Product findById(Integer id);
    void delete(Product product);
    Page<Product> seachByName(String name, PageRequest pageRequest);
}
