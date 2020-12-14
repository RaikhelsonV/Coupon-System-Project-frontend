import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { ModeService } from 'src/app/services/mode.service';
import { strict } from 'assert';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public customer: Customer;
 
  public last_name: string;
  token: string = localStorage.getItem("token");
  public coupon: Coupon;
  public coupons: Coupon[];

  constructor(private activatedRoute: ActivatedRoute,private modeService: ModeService, private customerService: CustomerService) { }

  ngOnInit()  {
    this.customerService.getCustomerR(this.token).subscribe(p => {
            this.customer = p;
            localStorage.setItem("customer_id",p.id.toString());
           }, err => {
             alert("Error:" + err.message)
          })
         ;
     
    // let id = +this.activatedRoute.snapshot.params.id;
    // this.customerService.getCustomerRest(this.token, id).subscribe(p => {
    //       this.customer = p;
    //      }, err => {
    //        alert("Error:" + err.message)
    //     })
    //    ;

          
    this.customerService.getAllCustomerCoupons(this.token).subscribe(coupons => {
      this.coupons = coupons;
      console.dir(this.coupons);
     }, err => {
      alert("Error:" + err.message)
    });
   
  //   this.customerService.getCustomerAccountByLasttName(this.token, this.last_name).subscribe(p => {
  //     this.customer = p;
  //    }, err => {
  //      alert("Error:" + err.message)
  //   })
  //  ;

  }


}
  


