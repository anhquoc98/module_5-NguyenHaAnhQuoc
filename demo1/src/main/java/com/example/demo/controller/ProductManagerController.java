package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin("*")
public class ProductManagerController {
    @Autowired
    private IProductService productService;

    @GetMapping("/product")
    public ResponseEntity<?>  list(){
        List<Product> products = productService.findByAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    @GetMapping("product/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id){
        Product product = new Product();
        product = productService.findById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteItem(@RequestBody @PathVariable Integer id) {
     productService.delete(productService.findById(id));
     return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/product/create")
    public ResponseEntity<?> createProduct(@RequestBody Product product){
      productService.save(product);
      return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
