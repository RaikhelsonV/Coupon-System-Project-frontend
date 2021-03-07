import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/models/company';
import {ActivatedRoute} from '@angular/router';
import {Coupon} from 'src/app/models/coupon';
import {GeneralService} from 'src/app/services/general.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  public token: string = localStorage.getItem('token');
  public coupon: Coupon;
  public coupons: Coupon[];
  public company: Company;
  public id: number = null;

  public constructor(private activatedRoute: ActivatedRoute, private generalService: GeneralService) {
  }

  public ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params.id;
    this.generalService.getCompanyById(this.id).subscribe(company => {
      this.company = company;
    }, err => {
      alert('Error:' + err.message);
    });

    this.generalService.getAllCompanyCoupons(this.id).subscribe(coupons => {
      this.coupons = coupons;
    }, err => {
      alert('Error: ' + err.message);
    });
  }
}

