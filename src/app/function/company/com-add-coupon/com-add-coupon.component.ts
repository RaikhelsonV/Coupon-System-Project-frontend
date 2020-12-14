import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompaniesService } from 'src/app/services/companies.service';


@Component({
  selector: 'app-com-add-coupon',
  templateUrl: './com-add-coupon.component.html',
  styleUrls: ['./com-add-coupon.component.css']
})
export class ComAddCouponComponent  {
  token: string = localStorage.getItem("token");
  public coupon = new Coupon();

  public constructor(private companiesService: CompaniesService) { }

  public addCoupon(): void {
    // alert(`
    // Id: ${this.coupon.id}
    // Title: ${this.coupon.title}
    // StartDate: ${this.coupon.startDate}
    // EndDate: ${this.coupon.endDate}
    // Category: ${this.coupon.category}
    // Amount: ${this.coupon.amount}
    // Description: ${this.coupon.description}
    // Price: ${this.coupon.price}
    // ImageURL: ${this.coupon.imageURL}
    // `);

    console.log(this.token);
    console.log(this.coupon);
    
    this.companiesService.addCouponRest(this.token, this.coupon).subscribe( c => {
      alert("Coupon has been succesfully added! Coupon ID:" + c.id);
    }, err => {
      alert("error: Unable to add this coupon!" + err.message);
    })

  }


}