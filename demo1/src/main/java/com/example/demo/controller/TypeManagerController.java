package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.model.TypeProduct;
import com.example.demo.service.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/type")
@CrossOrigin("*")
public class TypeManagerController {
    @Autowired
    ITypeProductService typeProductService;

    @GetMapping("/product")
    public ResponseEntity<?> list(){
        List<TypeProduct> products = typeProductService.findBy();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


}
