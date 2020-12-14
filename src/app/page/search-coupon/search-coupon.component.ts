import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ModeService } from 'src/app/services/mode.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponComponent } from '../coupon/coupon.component';
import { CouponsDescComponent } from 'src/app/page-ser/coupons-desc/coupons-desc.component';
import { CouponsTitleComponent } from 'src/app/page-ser/coupons-title/coupons-title.component';
import { CouponsPriceComponent } from 'src/app/page-ser/coupons-price/coupons-price.component';

@Component({
  selector: 'app-search-coupon',
  templateUrl: './search-coupon.component.html',
  styleUrls: ['./search-coupon.component.css']
})
export class SearchCouponComponent implements OnInit {

  public coupons: Coupon[];
  token: string = localStorage.getItem("token");
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  
  public constructor(private couponComponent: CouponComponent,
     private couponsDescComponent: CouponsDescComponent,
     private couponsTitleComponent: CouponsTitleComponent,
     private couponsPriceComponent:CouponsPriceComponent,
     private router: Router){}


  ngOnInit(): void {

    }

    public getCouponsByTitle(){
      localStorage.setItem("title", this.title.toString());
      this.router.navigate(["/coupons-title"])
    }
    public getCouponsByDesc(){
      localStorage.setItem("description", this.description.toString());
      this.router.navigate(["/coupons-desc"])
    }
    public getCouponsByPricelessThan(){
      localStorage.setItem("price", this.price.toString());
      this.router.navigate(["/coupons-price"])
    }
    // public getCouponsByPriceGreaterThan(){
    //   this.couponsPriceComponent.getCouponsByPriceGreaterThan(this.price);
      
    // }

}
