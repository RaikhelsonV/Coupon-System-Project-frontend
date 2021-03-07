import {Component, OnInit} from '@angular/core';
import {Coupon} from 'src/app/models/coupon';
import {CustomerService} from 'src/app/services/customer.service';

@Component({
  selector: 'app-coupons-price',
  templateUrl: './coupons-price.component.html',
  styleUrls: ['./coupons-price.component.css']
})
export class CouponsPriceComponent implements OnInit {
  public coupons: Coupon[];
  public token: string = localStorage.getItem('token');
  public price: number = parseFloat(localStorage.getItem('price'));

  constructor(private customerService: CustomerService) {
  }

  public ngOnInit(): void {
    this.customerService.getAllCouponsByPriceLessThan(this.token, this.price).subscribe(coupons => {
      this.coupons = coupons;
      console.log('Coup Comp. getCouponsByPriceLessThan()');
      console.log(coupons);
    }, err => {
      alert('Dear getAllCustomers, log into your account!');
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
