import { Component } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.scss']
})
export class GetAllCustomersComponent {


constructor(private service:CustomerService){}
customers:any=[];
ngOnInit(){
this.getAllCustomers();
}

getAllCustomers(){
  this.service.getAllCustomers().subscribe((res)=>{
    console.log(res);
    this.customers=res;
  })
}

deleteCustomer(id:number) {
  console.log(id);
  this.service.deleteCustomer(id).subscribe((res)=>{
    console.log(res);
    this.getAllCustomers();
  })
}

getCustomers(): void {
  this.service.getAllCustomers().subscribe((data: any[]) => {
    this.customers = data.sort((a, b) => b.id - a.id);
  });
}


}
