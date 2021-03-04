import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/models/company';
import {ActivatedRoute, Router} from '@angular/router';
import {CompaniesService} from 'src/app/services/companies.service';
import {Coupon} from 'src/app/models/coupon';
import {CouponService} from 'src/app/services/coupon.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  token: string = localStorage.getItem('token');
  public coupon: Coupon;
  public coupons: Coupon[];
  public company: Company;
  public id: number = null;

  public constructor(private activatedRoute: ActivatedRoute, private generalService:GeneralService,
                     private router: Router, private couponService: CouponService) {
  }

  public ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params.id;
    this.generalService.getCompanyByIdRest(this.id).subscribe(p => {
      this.company = p;
    }, err => {
      alert('Error:' + err.message);
    });

    this.generalService.getAllCompanyCouponsRest(this.id).subscribe(c => {
      this.coupons = c;
    }, err => {
      alert('Error: ' + err.message);
    });
  }
}

