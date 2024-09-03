package com.example.springboot_crud.controller;

import com.example.springboot_crud.entity.Customer;
import com.example.springboot_crud.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/customer")
    public Customer postCustomer(@RequestBody Customer customer){
        return customerService.postCustomer(customer);
    }
    @GetMapping("/customers")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomer();
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable Long id){
        customerService.deleteCustomer(id);
    }

    @PutMapping("/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id,@RequestBody Customer customer){
        Customer updatedCustomer=customerService.updateCustomer(id,customer);
        if(updatedCustomer==null)return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updatedCustomer);
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<Object> getCustomerById(@PathVariable Long id){
        Customer customer= customerService.getCustomerById(id);
        if(customer==null)return ResponseEntity.notFound().build();
        return ResponseEntity.ok(customer);
    }


}
