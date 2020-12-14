import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-comp-coup',
  templateUrl: './comp-coup.component.html',
  styleUrls: ['./comp-coup.component.css']
})
export class CompCoupComponent implements OnInit {
  getAllCompanyCoupons(token: string) {
    throw new Error("Method not implemented.");
  }
  public company: Company ;
  token: string = localStorage.getItem("token");
  
  public coupon: Coupon;
  public coupons: Coupon[];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.companiesService.getCompanyR(this.token).subscribe(c => {
      this.company = c;
      
      localStorage.setItem("company_id",c.id.toString());
     
     }, err => {
       alert("Error:" + err.message)
    });

    this.companiesService.getAllCompanyCoupons(this.token).subscribe(coupons => {
      this.coupons = coupons;
      console.dir(this.coupons);
     }, err => {
      alert("Error:" + err.message)
    });
   
  }
  public delCoupon(coupon_id:number) {
  
    this.companiesService.deleteCompCouponRest(this.token,coupon_id).subscribe(msg =>{
      alert("Coupon has been succesfully deleted!:" + msg);
        console.log("message:", msg);
    }, err =>{
      console.log("error:" + err);
    });

  }

}
