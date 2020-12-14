import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public coupons: Coupon[];
  public imageWidth: number;
  public imageHeight: number;

  public constructor(private title: Title,private couponService: CouponService ){}

    public ngOnInit(): void {
    this.imageWidth = 200;
    this.imageHeight = 300;
    this.title.setTitle("Home");
  }

}
