import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-company-coupons',
  templateUrl: './company-coupons.component.html',
  styleUrls: ['./company-coupons.component.css']
})
export class CompanyCouponsComponent implements OnInit {
  public company: Company;
  token: string = localStorage.getItem('token');

  public coupon: Coupon;
  public coupons: Coupon[];

  constructor(private companiesService: CompaniesService,
    private couponService: CouponService,
    public router: Router) {
  }

  ngOnInit(): void {
    this.companiesService.getCompany(this.token).subscribe(c => {
      this.company = c;
      localStorage.setItem('company_id', c.id.toString());
    }, err => {
      alert('Error:' + err.message);
    });

    this.companiesService.getAllCompanyCoupons(this.token).subscribe(coupons => {
      this.coupons = coupons;
      coupons.forEach(function (coupon) {
        coupon.id
        console.log(coupon)
      })
    }, err => {
      alert('Error:' + err.message);
    });

  }

  public delCoupon(coupon_id: number) {
    this.companiesService.deleteCoupon(this.token, coupon_id).subscribe(msg => {
      alert('Coupon has been succesfully deleted!');
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/company-coupons']);
      console.log('message:', msg);
    }, err => {
      console.log('error:' + err);
    });
  }
  public saveCouponId(couponId:number){
    localStorage.setItem('compCouponId', couponId.toString());
    this.router.navigate(['/update-coupon']);
  }

}
