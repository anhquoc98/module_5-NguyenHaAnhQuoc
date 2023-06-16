package com.example.demo.repository;

import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select *from product",nativeQuery = true)
    List<Product> findAllBy();
//    @Query(value = "delete from product where id=:id",nativeQuery = true)
//    void detele(@Param("id") int id);

}
