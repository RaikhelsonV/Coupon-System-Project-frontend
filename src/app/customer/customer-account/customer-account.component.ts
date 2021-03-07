import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/models/customer';
import {CustomerService} from 'src/app/services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {Coupon} from 'src/app/models/coupon';
import {ModeService} from 'src/app/services/mode.service';
import {CouponService} from 'src/app/services/coupon.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {
  public customer: Customer;
  public token: string = localStorage.getItem('token');
  public totalPricePur: any = localStorage.getItem('totalPrice');
  public coupon = new Coupon;

  public coupons: Coupon[];

  constructor(private activatedRoute: ActivatedRoute,
              private modeService: ModeService,
              private customerService: CustomerService,
              public couponService: CouponService) {
  }

  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_CUSTOMER;
    this.customerService.getCustomer(this.token).subscribe(customer => {
      this.customer = customer;
      console.dir(customer);
      localStorage.setItem('customerId', customer.id.toString());
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

  public delCoupon(couponId: number) {
    console.log(couponId);
    this.customerService.releaseCusCoupon(this.token, couponId)
      .subscribe(msg => {
        alert('Coupon has been succesfully released!');
        this.totalPrice();
        window.location.reload();
      }, err => {
        alert('Dear getAllCustomers, log into your account! ' + err);
      });
  }

  public totalPrice() {
    this.customerService.getAllCustomerCouponsTotalPrice(this.token).subscribe(totalPrice => {
      this.totalPricePur = totalPrice;
      localStorage.setItem('totalPrice', totalPrice);
      console.dir(totalPrice);
    });
  }


}



