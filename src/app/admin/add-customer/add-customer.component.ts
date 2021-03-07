import {Component} from '@angular/core';
import {Customer} from 'src/app/models/customer';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  public token: string = localStorage.getItem('token');
  public customer = new Customer();

  public constructor(private adminService: AdminService) {
  }

  public addCustomer(): void {
    alert(`
    First_Name: ${this.customer.firstName}
    Last_Name: ${this.customer.lastName}
    `);
    this.adminService.addCustomer(this.token, this.customer).subscribe(customer => {
      alert('Customer has been successfully added!:' + customer.id);
    }, err => {
      alert('error: Unable to add this getAllCustomers!' + err.message);
    });
  }
}
