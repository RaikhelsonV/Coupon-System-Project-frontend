import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { CompaniesService } from 'src/app/services/companies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-com-update-coupon',
  templateUrl: './com-update-coupon.component.html',
  styleUrls: ['./com-update-coupon.component.css']
})
export class ComUpdateCouponComponent implements OnInit {
  public company: Company;
  coupon = new Coupon();
  token: string = localStorage.getItem('token');
  Validation: boolean = true;
  couponId: any = localStorage.getItem('compCouponId');


  constructor(private companiesService: CompaniesService,
    public couponService: CouponService,
    private activatedRoute: ActivatedRoute,
    public router: Router, public modeService: ModeService) {
  }
  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_COMPANY;
    this.couponService.getCouponById(this.couponId).subscribe(p => {
      this.coupon = p;
      console.dir(p);
    }, err => {
      alert('Error:' + err.message);
    });

  }

  UpdateCoupon() {
    this.companiesService.updateCoupon(this.token, this.coupon).subscribe(c => {
      this.coupon = c;
      console.dir(c.title);
      alert('The Coupon ' + c.title + ' was updated succesfully');
      this.router.navigate(['/company-coupons']);

    }, err => {
      console.log('error:Unable to update this coupon!' + err.message);
    });
  }

}
