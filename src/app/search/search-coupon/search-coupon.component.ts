import {Component, OnInit} from '@angular/core';
import {Coupon} from 'src/app/models/coupon';
import {Router} from '@angular/router';
import {CouponComponent} from '../../page/coupon/coupon.component';
import {CouponsDescriptionComponent} from 'src/app/search/coupons-desc/coupons-description.component';
import {CouponsTitleComponent} from 'src/app/search/coupons-title/coupons-title.component';
import {CouponsPriceComponent} from 'src/app/search/coupons-price/coupons-price.component';

@Component({
  selector: 'app-search-coupon',
  templateUrl: './search-coupon.component.html',
  styleUrls: ['./search-coupon.component.css']
})
export class SearchCouponComponent implements OnInit {
  public coupons: Coupon[];
  public token: string = localStorage.getItem('token');
  public id: number;
  public title: string;
  public description: string;
  public price: number;

  public constructor(private couponComponent: CouponComponent,
                     private couponsDescComponent: CouponsDescriptionComponent,
                     private couponsTitleComponent: CouponsTitleComponent,
                     private couponsPriceComponent: CouponsPriceComponent,
                     private router: Router) {
  }

  ngOnInit(): void {
  }

  public getCouponsByTitle() {
    localStorage.setItem('title', this.title.toString());
    this.router.navigate(['/coupons-title']);
  }

  public getCouponsByDesc() {
    localStorage.setItem('description', this.description.toString());
    this.router.navigate(['/coupons-description']);
  }

  public getCouponsByPricelessThan() {
    localStorage.setItem('price', this.price.toString());
    this.router.navigate(['/coupons-price']);
  }

  // public getCouponsByPriceGreaterThan(){
  //   this.couponsPriceComponent.getCouponsByPriceGreaterThan(this.price);

  // }

}
