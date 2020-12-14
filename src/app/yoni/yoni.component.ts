import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Coupon } from '../models/coupon';

@Component({
  selector: 'app-yoni',
  templateUrl: './yoni.component.html',
  styleUrls: ['./yoni.component.css']
})
export class YoniComponent implements OnInit {
  coupon= new Coupon();
  Validation : boolean = true
    constructor(private activateRoute: ActivatedRoute ) {
    }
    
  
    ngOnInit() { 
  
    }
  
    //add form validator fo each input field
    categoryFormControl = new FormControl('',Validators.required);
    titleFormControl = new FormControl('',Validators.required);
    startDateFormControl = new FormControl('',Validators.required);
    endDateFormControl = new FormControl('',Validators.required);
    amountFormControl = new FormControl('',Validators.required);
    descriptionFormControl = new FormControl('',Validators.required);
    priceFormControl = new FormControl('',Validators.required);
    imageUrlFormControl = new FormControl('',Validators.required);
    
    //create a form group 
    myFormGroup = new FormGroup(
      {
        category:this.categoryFormControl,
        title:this.titleFormControl,
        startDate:this.startDateFormControl,
        endDate:this.endDateFormControl,
        amount:this.amountFormControl,
        description:this.descriptionFormControl,
        price:this.priceFormControl,
        imageUrl:this.imageUrlFormControl,
      });
    
    UpdateCoupon(){
  
        if(this.categoryFormControl.invalid){
          this.coupon.category =this.categoryFormControl.value;
        }
        if(this.titleFormControl.invalid){
          this.coupon.title =this.titleFormControl.value;
        }
        if(this.startDateFormControl.invalid){
          this.coupon.startDate =this.startDateFormControl.value;
        }
        if(this.endDateFormControl.invalid){
          this.coupon.endDate =this.endDateFormControl.value;
        }
        if(this.descriptionFormControl.invalid){
          this.coupon.description=this.descriptionFormControl.value;
        }
        if(this.amountFormControl.invalid){
          this.coupon.amount= this.amountFormControl.value;
        }
        if(this.priceFormControl.invalid){
          this.coupon.price = this.priceFormControl.value;
        }
        // if(this.imageUrlFormControl.invalid){
        //   this.coupon.imageUrl = this.imageUrlFormControl.value;
        // }
        // this.service.UpdateCouponRest(this.coupon).subscribe(c => {
        //   this.coupon = c;
          
        //   console.log(c)
        //   alert("The Coupon" + c.title + " was updated succesfully")
        // this.router.navigate(['/coupons/findcoupon/coupondetails/'+this.coupon.id])
        // }, err => {
        //   this.Handler.handleError(err)
        // })
  }
  }
  
  