import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer = new Customer();
  token: string = localStorage.getItem("token");
  Validation : boolean = true


  constructor(private adminService: AdminService, private customerService: CustomerService) { }
 
  ngOnInit() {
  }
  idFormControl = new FormControl(localStorage.getItem("customer_id"));
  firstNameFormControl = new FormControl('');
  lastNameFormControl = new FormControl('');

  myFormGroup = new FormGroup(
    {
      id:this.idFormControl,
      firstName:this.firstNameFormControl,
     lastName:this.lastNameFormControl
    });

    UpdateCustomer(){
      this.customer.id =this.idFormControl.value;
    
      // this.couponService.getCouponByIdRest(this.coupon.id).subscribe(c => {
      //   this.coupon = c;
      //   console.log(c)
      // }, err => {
      //   console.log("error:");
    
      // });

      this.customer.firstName =this.firstNameFormControl.value;
      this.customer.lastName = this.lastNameFormControl.value;
      
      this.adminService.updateAdminCustomerRest(this.token, this.customer.id, this.customer ).subscribe(c => {
        this.customer = c;
        
        console.log(c)
        alert("The Customer " + c.lastName + " was updated succesfully")
    
      }, err => {
        console.log("error: Unable to update this customer!" + err.message);
      });
}
  
}


