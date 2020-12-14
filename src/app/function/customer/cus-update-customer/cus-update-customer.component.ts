import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cus-update-customer',
  templateUrl: './cus-update-customer.component.html',
  styleUrls: ['./cus-update-customer.component.css']
})
export class CusUpdateCustomerComponent implements OnInit {

  customer= new Customer();
  token: string = localStorage.getItem("token");
  Validation : boolean = true
 
   constructor(private customerService: CustomerService,private activatedRoute: ActivatedRoute) { }
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

      this.customer.firstName =this.firstNameFormControl.value;
      this.customer.lastName = this.lastNameFormControl.value;
      
      this.customerService.updateCusCustomerRest(this.token, this.customer.id, this.customer ).subscribe(c => {
        this.customer = c;
        
        console.log(c)
        alert("The Customer " + c.lastName + " was updated succesfully")
    
      }, err => {
        console.log("error: Unable to update this customer!" + err.message);
      });
}
  
}