import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AdminService} from 'src/app/services/admin.service';
import {Coupon} from 'src/app/models/coupon';

@Component({
  selector: 'app-get-all-coupons-and-delete',
  templateUrl: './get-all-coupons-and-delete.component.html',
  styleUrls: ['./get-all-coupons-and-delete.component.css']
})
export class GetAllCouponsAndDeleteComponent implements OnInit {
  public coupons: Coupon[];
  public token: string = localStorage.getItem('token');

  constructor(private title: Title,
              private adminService: AdminService) {
  }

  ngOnInit(): void {
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

