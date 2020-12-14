import { Component, OnInit} from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponService } from 'src/app/services/coupon.service';


@Component({
  selector: 'app-coupons-title',
  templateUrl: './coupons-title.component.html',
  styleUrls: ['./coupons-title.component.css']
})
export class CouponsTitleComponent implements OnInit {
  public coupons: Coupon[];
  token: string = localStorage.getItem("token");
  title:String = localStorage.getItem("title");

  constructor(private customerService: CustomerService, private couponService: CouponService) { }

  public ngOnInit(): void {

    this.customerService.getCouponsByTitleRest(this.token,this.title).subscribe( coupons => {
      this.coupons = coupons;
      console.log("Coup Comp. getCouponsByTitle()");
      console.log(coupons);
    }, err => {
      alert("Error:" + err.message)
    });
      
    }
}
