import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupons-desc',
  templateUrl: './coupons-desc.component.html',
  styleUrls: ['./coupons-desc.component.css']
})
export class CouponsDescComponent implements OnInit {
  public coupons: Coupon[];
  token: string = localStorage.getItem("token");
  description:String = localStorage.getItem("description");

  constructor(private customerService: CustomerService,private couponService: CouponService) { }

  public ngOnInit(): void {
    this.customerService.getCouponsByDescriptionLikeRest(this.token,this.description).subscribe( coupons => {
      this.coupons = coupons;
      console.log("Coup Comp. getCouponsByDesc()");
      console.log(coupons);
    }, err => {
      alert("Error:" + err.message)
    });
    }

}
