import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupons-price',
  templateUrl: './coupons-price.component.html',
  styleUrls: ['./coupons-price.component.css']
})
export class CouponsPriceComponent implements OnInit {
  public coupons: Coupon[];
  token: string = localStorage.getItem("token");
  price:number = parseFloat(localStorage.getItem("price"));

  constructor(private customerService: CustomerService,private couponService: CouponService) { }

  public ngOnInit(): void {
    this.customerService.getAllCouponsByPriceLessThan(this.token,this.price).subscribe( coupons => {
      this.coupons = coupons;
      console.log("Coup Comp. getCouponsByPriceLessThan()");
      console.log(coupons);
    }, err => {
      alert("Error:" + err.message)
    });
  }
  // public getCouponsByPriceGreaterThan(price: number) {
  //     this.customerService.getAllByPriceIsGreaterThan(this.token,price).subscribe( coupons => {
  //       this.coupons = coupons;
  //       console.log("Coup Comp. getCouponsByPriceGreaterThan()");
  //       console.log(coupons);
  //     }, err => {
  //       alert("Error:" + err.message)
  //     });
  //  }

}
