import {Component, OnInit} from '@angular/core';
import {Coupon} from 'src/app/models/coupon';
import {ActivatedRoute} from '@angular/router';
import {CouponService} from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-category',
  templateUrl: './coupon-category.component.html',
  styleUrls: ['./coupon-category.component.css']
})
export class CouponCategoryComponent implements OnInit {
  public coupons: Coupon[];
  token: string = localStorage.getItem('token');

  constructor(private activatedRoute: ActivatedRoute, private couponService: CouponService) {
  }

  ngOnInit(): void {
    let category = +this.activatedRoute.snapshot.params.category;
    this.couponService.getCouponByCategoryRest(category).subscribe(coupons => {
      this.coupons = coupons;
      console.dir(this.coupons);
    }, err => {
      alert('Error:' + err.message);
    });

  }
}
