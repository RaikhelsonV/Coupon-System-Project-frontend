import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Coupon } from 'src/app/models/coupon';
import { CompaniesService } from 'src/app/services/companies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-com-update-coupon',
  templateUrl: './com-update-coupon.component.html',
  styleUrls: ['./com-update-coupon.component.css']
})
export class ComUpdateCouponComponent implements OnInit{
  public company: Company;
  coupon = new Coupon();
  token: string = localStorage.getItem('token');
  Validation: boolean = true;

  constructor(private companiesService: CompaniesService, public router: Router, public modeService:ModeService) {
  }
  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_COMPANY;
  }

  idFormControl = new FormControl('');
  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[A-Za-z].*$')]);
  startDateFormControl = new FormControl('');
  endDateFormControl = new FormControl('');
  categoryFormControl = new FormControl('');
  amountFormControl = new FormControl('');
  descriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[A-Za-z].*$')]);
  priceFormControl = new FormControl('');
  imageURLFormControl = new FormControl('', [Validators.required, Validators.maxLength(2000)]);

  myFormGroup = new FormGroup(
    {
      id: this.idFormControl,
      title: this.titleFormControl,
      startDate: this.startDateFormControl,
      endDate: this.endDateFormControl,
      category: this.categoryFormControl,
      amount: this.amountFormControl,
      description: this.descriptionFormControl,
      price: this.priceFormControl,
      imageURL: this.imageURLFormControl,
    });

  UpdateCoupon() {
    this.coupon.id = this.idFormControl.value;
    this.coupon.title = this.titleFormControl.value;
    this.coupon.startDate = this.startDateFormControl.value;
    this.coupon.endDate = this.endDateFormControl.value;
    this.coupon.category = this.categoryFormControl.value;
    this.coupon.amount = this.amountFormControl.value;
    this.coupon.description = this.descriptionFormControl.value;
    this.coupon.price = this.priceFormControl.value;
    this.coupon.imageURL = this.imageURLFormControl.value;

    this.companiesService.updateCouponRest(this.token, this.coupon).subscribe(c => {
      this.coupon = c;
      console.log(c);
      alert('The Coupon ' + c.title + ' was updated succesfully');
      this.router.navigate(['/company-coupons']);

    }, err => {
      console.log('error:Unable to update this coupon!' + err.message);
    });
  }

}
