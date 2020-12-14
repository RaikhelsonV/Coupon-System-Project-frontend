import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';
import { ModeService } from 'src/app/services/mode.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {

  
  public showImage(imageSource: string): void{
    alert("User clicked on image" + imageSource);
  }
  
  public coupons: Coupon[];
  token: string = localStorage.getItem("token");
  
  public constructor(private title: Title, private couponService: CouponService, 
    private modeService:ModeService, private adminService: AdminService
    ,private activatedRoute: ActivatedRoute,private customerService: CustomerService){}

  public ngOnInit(): void{
    this.title.setTitle("Coupon");

    setTimeout(() => {
      this.couponService.getAllCouponsRest().subscribe(coupons => {
        this.coupons = coupons;
        console.dir(this.coupons);
       }, err => {
        alert("Error:" + err.message)
      });
     },1000);
    }
 


  }

    


