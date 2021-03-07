import {Component} from '@angular/core';
import {Customer} from 'src/app/models/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-update-customer',
  templateUrl: './admin-update-customer.component.html',
  styleUrls: ['./admin-update-customer.component.css']
})
export class AdminUpdateCustomerComponent {
  public customer = new Customer();
  public token: string = localStorage.getItem('token');
  public Validation: boolean = true;

  constructor(private adminService: AdminService) {
  }

  idFormControl = new FormControl(localStorage.getItem('customerId'));
  firstNameFormControl = new FormControl('');
  lastNameFormControl = new FormControl('');

  myFormGroup = new FormGroup(
    {
      id: this.idFormControl,
      firstName: this.firstNameFormControl,
      lastName: this.lastNameFormControl
    });

  UpdateCustomer() {
    this.customer.id = this.idFormControl.value;
    this.customer.firstName = this.firstNameFormControl.value;
    this.customer.lastName = this.lastNameFormControl.value;

    this.adminService.updateAdminCustomer(this.token, this.customer.id, this.customer).subscribe(customer => {
      this.customer = customer;

      console.log(customer);
      alert('The Customer ' + customer.lastName + ' was updated successfully');

    }, err => {
      console.log('error: Unable to update this getAllCustomers!' + err.message);
    });
  }

}


