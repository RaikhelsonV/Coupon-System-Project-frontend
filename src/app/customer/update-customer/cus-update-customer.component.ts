import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/models/customer';
import {CustomerService} from 'src/app/services/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import { ModeService } from 'src/app/services/mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cus-update-customer',
  templateUrl: './cus-update-customer.component.html',
  styleUrls: ['./cus-update-customer.component.css']
})
export class CusUpdateCustomerComponent implements OnInit {
  customer = new Customer();
  token: string = localStorage.getItem('token');
  Validation: boolean = true;

  constructor(private customerService: CustomerService,public modeService:ModeService, public router:Router) {
  }
  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_CUSTOMER;
  }


  idFormControl = new FormControl(localStorage.getItem('customer_id'));
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

    this.customerService.updateCustomerRest(this.token, this.customer.id, this.customer).subscribe(c => {
      this.customer = c;
      localStorage.setItem('lastName',c.lastName),
      console.log(c);
      alert('The Customer ' + c.lastName + ' was updated succesfully!');
      this.router.navigate(['/customer-account']);

    }, err => {
      console.log('error: Unable to update this customer!' + err.message);
    });
  }

}
