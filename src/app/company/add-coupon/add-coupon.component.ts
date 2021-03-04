import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Coupon} from 'src/app/models/coupon';
import {CompaniesService} from 'src/app/services/companies.service';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent {
  token: string = localStorage.getItem('token');
  public coupon = new Coupon();

  public constructor(private companiesService: CompaniesService,public router: Router, 
    public modeService:ModeService) {
  }
  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_COMPANY;
  }

  public addCoupon(): void {
    console.log(this.token);
    console.log(this.coupon);
    this.companiesService.addCouponRest(this.token, this.coupon).subscribe(c => {
      this.router.navigate(['/company-coupons']);
      alert('Coupon has been succesfully added! Coupon ID:' + c.id);
    }, err => {
      alert('error: Unable to add this coupon!' + err.message);
    });

  }


}
