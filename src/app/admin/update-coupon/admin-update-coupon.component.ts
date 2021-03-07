import {Component} from '@angular/core';
import {Coupon} from 'src/app/models/coupon';
import {Company} from 'src/app/models/company';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-update-coupon',
  templateUrl: './admin-update-coupon.component.html',
  styleUrls: ['./admin-update-coupon.component.css']
})
export class AdminUpdateCouponComponent {
  public company: Company;
  public coupon = new Coupon();
  public token: string = localStorage.getItem('token');
  public Validation: boolean = true;

  constructor(private adminService: AdminService) {
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

    // this.couponService.getCouponByIdRest(this.coupon.id).subscribe(c => {
    //   this.coupon = c;
    //   console.log(c)
    // }, err => {
    //   console.log("error:");

    // });

    this.coupon.title = this.titleFormControl.value;

    this.coupon.startDate = this.startDateFormControl.value;

    this.coupon.endDate = this.endDateFormControl.value;

    this.coupon.category = this.categoryFormControl.value;
    this.coupon.amount = this.amountFormControl.value;

    this.coupon.description = this.descriptionFormControl.value;

    this.coupon.price = this.priceFormControl.value;

    this.coupon.imageURL = this.imageURLFormControl.value;

    this.adminService.updateAdminCoupon(this.token, this.coupon.id, this.coupon).subscribe(coupon => {
      this.coupon = coupon;

      console.log(coupon);
      alert('The Coupon ' + coupon.title + ' was updated successfully');

    }, err => {
      console.log('error: Unable to update this coupon!' + err.message);
    });
  }

}

