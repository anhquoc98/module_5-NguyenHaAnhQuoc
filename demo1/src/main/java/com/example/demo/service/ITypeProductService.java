package com.example.demo.service;

import com.example.demo.model.TypeProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ITypeProductService {
    List<TypeProduct> findBy();
}
