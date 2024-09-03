import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const Basic_Url=["http://localhost:8080/"];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http:HttpClient) { }

  postCustomer(customer:any):Observable<any>{
    return this.http.post(Basic_Url+"api/customer",customer);
  }
  getAllCustomers():Observable<any>{
    return this.http.get(Basic_Url+"api/customers");
  }
  deleteCustomer(id:number):Observable<any>{
    return this.http.delete(Basic_Url+"api/customers/"+ id);
  }

  getCustomerById(id:number):Observable<any>{
    return this.http.get(Basic_Url+"api/customer/"+ id);
  }

  updateCustomer(id:number,customer:any):Observable<any>{
    return this.http.put(Basic_Url+"api/customers/"+ id,customer);
  }

 
}
