import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies.service';
import { Coupon } from 'src/app/models/coupon';
import { CompCoupComponent } from 'src/app/page/comp-coup/comp-coup.component';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  token: string = localStorage.getItem("token");
  public coupon: Coupon;
  public coupons: Coupon[];


  public company: Company;
public id: number = null;

  public constructor(private activatedRoute: ActivatedRoute, private companiesService: CompaniesService,
     private router: Router, private couponService: CouponService,
    private compCoup: CompCoupComponent,) { }

  public ngOnInit() {

    this.id = +this.activatedRoute.snapshot.params.id;
    this.companiesService.getCompanyByIdRest(this.id).subscribe(p => {
      this.company = p;
      
     }, err => {
       alert("Error:" + err.message)
    });
  
    this.couponService.getAllCompanyCouponsR(this.id).subscribe(c => {
    this.coupons = c;
    }, err => {
      alert("Error: " + err.message);
    });

   
    
  }



}
    //  this.companiesService.getAllCompaniesHttp().subscribe(companies => {
      //  const id = +this.activatedRoute.snapshot.params.id
        //  this.company = companies.find(p => p.id == id);
     
      //}, err => {
       // alert("Error:" + err.message)
      //});
