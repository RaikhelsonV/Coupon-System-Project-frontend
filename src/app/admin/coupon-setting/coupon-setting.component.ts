import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AdminService} from 'src/app/services/admin.service';
import {Coupon} from 'src/app/models/coupon';
import {ModeService} from '../../services/mode.service';

@Component({
  selector: 'app-coupon-setting',
  templateUrl: './coupon-setting.component.html',
  styleUrls: ['./coupon-setting.component.css']
})
export class CouponSettingComponent implements OnInit {
  public coupons: Coupon[];
  public token: string = localStorage.getItem('token');

  constructor(public title: Title,
              public adminService: AdminService,
              public modeService: ModeService) {
  }

  ngOnInit(): void {
    this.modeService.clientType = this.modeService.ROLE_ADMIN;
    this.title.setTitle('Coupon');
    setTimeout(() => {
      this.adminService.getAllCouponsAdmin(this.token).subscribe(coupons => {
        this.coupons = coupons;
        console.dir(this.coupons);
        console.log('Token: ' + localStorage.getItem('token'));
      }, err => {
        alert('Error:' + err.message);
      });
    }, 1000);
  }


  public deleteCoupon(couponId: number) {
    this.adminService.deleteAdminCoupon(this.token, couponId).subscribe(msg => {
      alert('Coupon has been successfully deleted!');
      console.log('message:', msg);
    }, err => {
      console.log('error:' + err);
    });
  }
}

