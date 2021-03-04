import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { Router } from '@angular/router';

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

  constructor(private companiesService: CompaniesService, public router: Router) {
  }

  ngOnInit(): void {
    this.companiesService.getCompanyRest(this.token).subscribe(c => {
      this.company = c;
      localStorage.setItem('company_id', c.id.toString());
    }, err => {
      alert('Error:' + err.message);
    });

    this.companiesService.getAllCompanyCoupons(this.token).subscribe(coupons => {
      this.coupons = coupons;
      console.dir(this.coupons);
    }, err => {
      alert('Error:' + err.message);
    });

  }

  public delCoupon(coupon_id: number) {
    this.companiesService.deleteCouponRest(this.token, coupon_id).subscribe(msg => {
      alert('Coupon has been succesfully deleted!');
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/company-coupons']);
      console.log('message:', msg);
    }, err => {
      console.log('error:' + err);
    });
  }

}
