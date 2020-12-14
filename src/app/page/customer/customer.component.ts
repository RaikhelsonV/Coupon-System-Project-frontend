import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
  public customers: Customer[];
  public coupons: Coupon[];
  token: string = localStorage.getItem("token");
  description: string;
  

  public constructor(private title: Title, private customerService: CustomerService, private couponService:CouponService, private adminService: AdminService){}
 
 

  public deleteCustomer(customer_id:number){
    this.adminService.deleteAdminCustomerRest(this.token,customer_id).subscribe(msg =>{
      alert("Customer has been succesfully deleted!");
      console.log("Customer has been succesfully deleted!:", msg);
  }, err =>{
    console.log("error:" + err);
  });
    
  }

  public ngOnInit(): void{
   
    this.title.setTitle("Customer");

    setTimeout(() => {
      this.customerService.getAllCustomersRest(this.token).subscribe(customers => {
        this.customers = customers;
  
        console.dir(this.customers);
        console.log("Token: " + localStorage.getItem("token"))
      }, err => {
        alert("Error:" + err.message)
      });    

    },1000);}    

    

   }
  
