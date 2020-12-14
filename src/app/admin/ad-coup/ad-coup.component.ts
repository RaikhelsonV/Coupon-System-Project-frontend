import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
import { Title } from '@angular/platform-browser';
import { AdminService } from 'src/app/services/admin.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-ad-coup',
  templateUrl: './ad-coup.component.html',
  styleUrls: ['./ad-coup.component.css']
})
export class AdCoupComponent implements OnInit {
  public coupons: Coupon[];
  token: string = localStorage.getItem("token");

  constructor(private couponService: CouponService, private title: Title,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.title.setTitle("Coupon");

    setTimeout(() => {
      this.couponService.getAllCoup(this.token).subscribe(coupons => {
        this.coupons = coupons;
  
        console.dir(this.coupons);
        console.log("Token: " + localStorage.getItem("token"))
      }, err => {
        alert("Error:" + err.message)
      });

    },1000);}

    

  public deleteCoupon(coupon_id:number) {

    this.adminService.deleteAdminCouponRest(this.token,coupon_id).subscribe(msg =>{
      alert("Coupon has been succesfully deleted!");
        console.log("message:", msg);
    }, err =>{
      console.log("error:" + err);
    });

  }
  }

