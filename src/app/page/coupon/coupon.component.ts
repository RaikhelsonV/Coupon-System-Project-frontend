import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Coupon} from 'src/app/models/coupon';
import {GeneralService} from 'src/app/services/general.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  public coupons: Coupon[];
  token: string = localStorage.getItem('token');

  public constructor(private title: Title, private generalService: GeneralService) {
  }

  public ngOnInit(): void {
    this.title.setTitle('Coupon');
    setTimeout(() => {
      this.generalService.getAllCoupons().subscribe(coupons => {
        this.coupons = coupons;
        console.dir(this.coupons);
      }, err => {
        alert('Error:' + err.message);
      });
    }, 1000);
  }

  public showImage(imageSource: string): void {
    alert('User clicked on image' + imageSource);
  }
}



