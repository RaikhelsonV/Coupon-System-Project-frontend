import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { CompaniesService } from 'src/app/services/companies.service';
import { CouponService } from 'src/app/services/coupon.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-place-of-sales',
  templateUrl: './place-of-sales.component.html',
  styleUrls: ['./place-of-sales.component.css']
})
export class PlaceOfSalesComponent implements OnInit {
  public coupon: Coupon;
  token: string = localStorage.getItem('token');


  constructor(public modeService: ModeService,
    private activatedRoute: ActivatedRoute,
    private couponService: CouponService,
    private customerService: CustomerService,
    private router: Router,) { }

  ngOnInit(): void {
    this.modeService.clientType = this.modeService.ROLE_CUSTOMER;
    let id = +this.activatedRoute.snapshot.params.id;
    this.couponService.getCouponByIdRest(id).subscribe(p => {
      localStorage.setItem('coupon_id', p.id.toString());
      this.coupon = p;
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
      alert('Dear customer, log into your account: ' + err);
    });
  }

  public releaseCoupon(): void {
    console.log(this.coupon.id);
    this.customerService.releaseCusCouponRest(this.token, this.coupon.id).subscribe(coupon => {
      this.coupon = coupon;
      this.totalPrice();
      alert('Coupon has been succesfully released!');
      this.router.navigate(['/coupon']);
    }, err => {
      alert('Dear customer, log into your account: ' + err);
    });
  }
  
  public totalPrice() {
    this.customerService.getAllCustomerCouponsTotalPrice(this.token).subscribe(p => {
      localStorage.setItem('price', p);
      console.dir(p);
    });
  }



}

