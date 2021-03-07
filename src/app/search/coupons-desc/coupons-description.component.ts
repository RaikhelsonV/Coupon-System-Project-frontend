import {Component, OnInit} from '@angular/core';
import {Coupon} from 'src/app/models/coupon';
import {CustomerService} from 'src/app/services/customer.service';

@Component({
  selector: 'app-coupons-description',
  templateUrl: './coupons-description.component.html',
  styleUrls: ['./coupons-description.component.css']
})
export class CouponsDescriptionComponent implements OnInit {
  public coupons: Coupon[];
  public token: string = localStorage.getItem('token');
  public description: string = localStorage.getItem('description');

  constructor(private customerService: CustomerService) {
  }

  public ngOnInit(): void {
    this.customerService.getCouponsByDescriptionLike(this.token, this.description).subscribe(coupons => {
      this.coupons = coupons;
      console.log('Coup Comp. getCouponsByDesc()');
      console.log(coupons);
    }, err => {
      alert('Dear getAllCustomers, log into your account!');
    });
  }

}
