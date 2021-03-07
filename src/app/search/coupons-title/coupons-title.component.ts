import {Component, OnInit} from '@angular/core';
import {Coupon} from 'src/app/models/coupon';
import {CustomerService} from 'src/app/services/customer.service';

@Component({
  selector: 'app-coupons-title',
  templateUrl: './coupons-title.component.html',
  styleUrls: ['./coupons-title.component.css']
})
export class CouponsTitleComponent implements OnInit {
  public coupons: Coupon[];
  public token: string = localStorage.getItem('token');
  public title: string = localStorage.getItem('title');

  constructor(private customerService: CustomerService) {
  }

  public ngOnInit(): void {
    this.customerService.getCouponsByTitle(this.token, this.title).subscribe(coupons => {
      this.coupons = coupons;
      console.log('Coup Comp. getCouponsByTitle()');
      console.log(coupons);
    }, err => {
      alert('Dear getAllCustomers, log into your account!');
    });

  }
}
