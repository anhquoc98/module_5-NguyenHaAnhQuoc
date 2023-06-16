package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin("")
public class ProductManagerController {
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public List<Product> list(@PageableDefault(size = 3)Pageable pageable, @RequestParam(required = false,defaultValue = "" )String name){
        return productService.findByAll();
    }
}
