import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';
import { ModeService } from 'src/app/services/mode.service';
import { CouponService } from 'src/app/services/coupon.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {
  public customer: Customer;
  public lastName: string = localStorage.getItem('lastName');
  token: string = localStorage.getItem('token');
  price: any = localStorage.getItem('price');
  public coupon = new Coupon;

  public coupons: Coupon[];

  constructor(private activatedRoute: ActivatedRoute,
    private modeService: ModeService,
    private customerService: CustomerService,
    public couponService: CouponService,
    private router: Router) { }

  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_CUSTOMER;

    this.customerService.getCustomer(this.token).subscribe(p => {
      this.customer = p;
      localStorage.setItem('customer_id', p.id.toString());
    }, err => {
      alert('Error:' + err.message);
    });

    this.customerService.getAllCustomerCoupons(this.token).subscribe(coupons => {
      this.coupons = coupons;
      console.dir(this.coupons);
    }, err => {
      alert('Error:' + err.message);
    });
  }
  public delCoupon(coupon_id: number) {
    console.log(coupon_id);
    this.customerService.releaseCusCouponRest(this.token, coupon_id)
    .subscribe(msg => {
      alert('Coupon has been succesfully released!');
      this.totalPrice();
      window.location.reload();
    }, err => {
      alert('Dear customer, log into your account! ' + err);
    });
  }
  public totalPrice() {
    this.customerService.getAllCustomerCouponsTotalPrice(this.token).subscribe(p => {
      localStorage.setItem('price', p);
      console.dir(p);
    });
  }




}



