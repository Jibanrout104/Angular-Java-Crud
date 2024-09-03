import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"customer",component:PostCustomerComponent},
  {path:"get",component:GetAllCustomersComponent},
  {path:"customer/:id",component:UpdateCustomerComponent},
  // {path:"",component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
