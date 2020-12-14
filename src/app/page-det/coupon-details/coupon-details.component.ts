import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ActivatedRoute } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {

public coupon: Coupon;
token: string = localStorage.getItem("token");

public constructor( private activatedRoute: ActivatedRoute, private couponService: CouponService, private customerService: CustomerService) { }

public ngOnInit() {

 let id = +this.activatedRoute.snapshot.params.id;
 this.couponService.getCouponByIdRest(id).subscribe(p => {
   localStorage.setItem("coupon_id", p.id.toString());
   this.coupon = p;
  }, err => {
    alert("Error:" + err.message)
 })  }

 public purchaseCoupon(): void{
   console.log(this.coupon.id);
   
   this.customerService.purchaseCoupon(this.token, this.coupon.id).subscribe( coupon => {
    alert("Coupon has been succesfully purchased!");
    this.coupon = coupon;
  }, err => {
    alert("Dear customer, log into your account: " + err);
  });

 }
 public releaseCoupon(): void{
  console.log(this.coupon.id);
  
  this.customerService.releaseCusCouponRest(this.token, this.coupon.id).subscribe( coupon => {
    alert("Coupon has been succesfully released!");
   this.coupon = coupon;
 }, err => {
   alert("Dear customer, log into your account: " + err);
 });

}


    
 /*const id = +this.activatedRoute.snapshot.params.id 
   this.couponService.getAllCouponsRest().subscribe(coupons => {
    
      this.coupon = coupons.find(p => p.id == id); 

    }, err => {
      alert("Error:" + err.message)
    });
  
  */
}
