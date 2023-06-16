package com.example.demo.model;

import javax.persistence.*;

@Entity
public class TypeProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nameType;


    public TypeProduct(int id, String nameType) {
        this.id = id;
        this.nameType = nameType;
    }

    public TypeProduct() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
