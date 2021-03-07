import {Component, OnInit} from '@angular/core';
import {Coupon} from 'src/app/models/coupon';
import {ActivatedRoute} from '@angular/router';
import {CouponService} from 'src/app/services/coupon.service';
import {CustomerService} from 'src/app/services/customer.service';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {
  public coupon: Coupon;
  token: string = localStorage.getItem('token');

  public constructor(private activatedRoute: ActivatedRoute,
                     private couponService: CouponService,
                     private customerService: CustomerService,
                     public modeService:ModeService) {
  }

  public ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_COMPANY;
    let id = +this.activatedRoute.snapshot.params.id;
    this.couponService.getCouponById(id).subscribe(p => {
      localStorage.setItem('coupon_id', p.id.toString());
      this.coupon = p;
    }, err => {
      alert('Error:' + err.message);
    });
  }
}
