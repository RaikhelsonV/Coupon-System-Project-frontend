import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ModeService } from 'src/app/services/mode.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cus-update-customer',
  templateUrl: './cus-update-customer.component.html',
  styleUrls: ['./cus-update-customer.component.css']
})
export class CusUpdateCustomerComponent implements OnInit {
  public customer = new Customer();
  public token: string = localStorage.getItem('token');
  public customerId = parseInt(localStorage.getItem('customer_id'));
  public Validation: boolean = true;
  public email = localStorage.getItem('email');
  public password = localStorage.getItem('password');
  public user = new User();
  public newEmail = '';
  public newPassword = '';


  constructor(private customerService: CustomerService,
    public modeService: ModeService,
    public router: Router,
    public userService: UserService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_CUSTOMER;
    this.customerService.getCustomerById(this.token, this.customerId).subscribe(customer => {
      this.customer = customer;
      console.log(customer);
      localStorage.setItem('customer_id', customer.id.toString());
    }, err => {
      alert('Error:' + err.message);
    });

    this.userService.getUsersByEmailAndPassword(this.email, this.password).subscribe(user => {
      this.user = user;
      console.log(user);
    }, err => {
      alert('Error: YYYYY' + this.user + err.message);
    });
  }


  newEmailFormControl = new FormControl('');
  newPasswordFormControl = new FormControl('');

  myFormGroup = new FormGroup(
    {
      newEmail: this.newEmailFormControl,
      newPassword: this.newPasswordFormControl,

    });

  public UpdateCustomer() {
    this.customerService.updateCustomerRest(this.token, this.customer).subscribe(c => {
      this.customer = c;

      console.log(c);
      alert('The Customer ' + c.lastName + ' was updated succesfully!');
      this.router.navigate(['/customer-account']);

    }, err => {
      console.log('error: Unable to update this customer!' + err.message);
    });
  }


  public UpdateUser() {
    this.userService.updateUser(this.email, this.password, 
      this.newEmailFormControl.value, this.newPasswordFormControl.value).subscribe(u => {
      this.user = u;

      console.log(u);
      alert('The User was updated succesfully!');
      this.router.navigate(['/customer-account']);
    }, err => {
      this.router.navigate(['/customer-account']);
      console.log('error: Unable to update this user!' + err.message);
    }); 
  }

}
