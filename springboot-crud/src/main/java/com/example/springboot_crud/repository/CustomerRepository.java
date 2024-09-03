package com.example.springboot_crud.repository;


import com.example.springboot_crud.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Ejb3TransactionAnnotationParser;

@Repository
public interface CustomerRepository extends JpaRepository <Customer,Long> {



}
