import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Coupon} from 'src/app/models/coupon';
import {CouponService} from 'src/app/services/coupon.service';
import {CustomerService} from 'src/app/services/customer.service';
import {ModeService} from 'src/app/services/mode.service';

@Component({
  selector: 'app-place-of-sales',
  templateUrl: './place-of-sales.component.html',
  styleUrls: ['./place-of-sales.component.css']
})
export class PlaceOfSalesComponent implements OnInit {
  public coupon: Coupon;
  public token: string = localStorage.getItem('token');

  constructor(public modeService: ModeService,
              private activatedRoute: ActivatedRoute,
              private couponService: CouponService,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.modeService.clientType = this.modeService.ROLE_CUSTOMER;
    let id = +this.activatedRoute.snapshot.params.id;
    this.couponService.getCouponById(id).subscribe(coupon => {
      localStorage.setItem('couponId', coupon.id.toString());
      this.coupon = coupon;
    }, err => {
      alert('Error:' + err.message);
    });
  }

  public purchaseCoupon(): void {
    console.log(this.coupon.id);
    this.customerService.purchaseCoupon(this.token, this.coupon.id).subscribe(coupon => {
      this.coupon = coupon;
      this.totalPrice();
      alert('Coupon has been succesfully purchased!');
      this.router.navigate(['/coupon']);

    }, err => {
      alert('Dear customer, log into your account!');
    });
  }

  public releaseCoupon(): void {
    console.log(this.coupon.id);
    this.customerService.releaseCusCoupon(this.token, this.coupon.id).subscribe(coupon => {
      this.coupon = coupon;
      this.totalPrice();
      alert('Coupon has been succesfully released!');
      this.router.navigate(['/coupon']);
    }, err => {
      alert('Dear customer, log into your account!');
    });
  }

  public totalPrice() {
    this.customerService.getAllCustomerCouponsTotalPrice(this.token).subscribe(totalPrice => {
      localStorage.setItem('totalPrice', totalPrice);
      console.dir(totalPrice);
    });
  }


}

