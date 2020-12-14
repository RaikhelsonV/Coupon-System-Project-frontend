import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {
  token: string = localStorage.getItem("token");

  public customer = new Customer();

  public constructor(private adminService:AdminService) { }

  public addCustomer(): void {
    alert(`
    First_Name: ${this.customer.firstName}
    Last_Name: ${this.customer.lastName}
    `);
    
    this.adminService.addCustomerRest(this.token,this.customer).subscribe( p => {
      alert("Customer has been succesfully added!:" + p.id );
    }, err => {
      alert("error: Unable to add this customer!" + err.message);
    })
  }


}
