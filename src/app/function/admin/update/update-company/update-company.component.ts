import { Component } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent  {

 company= new Company();
 token: string = localStorage.getItem("token");
 Validation : boolean = true

  constructor(private adminService: AdminService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  idFormControl = new FormControl(localStorage.getItem("company_id"));
  nameFormControl = new FormControl('',[ Validators.required, Validators.minLength(1), Validators.pattern('^[A-Za-z].*$')]);
  imageURLFormControl = new FormControl('',[Validators.required, Validators.maxLength(2000)]);

  myFormGroup = new FormGroup(
    {
      id:this.idFormControl,
      name:this.nameFormControl,
      imageURL:this.imageURLFormControl,
    });

   public UpdateCompany(){
      this.company.id =this.idFormControl.value;
    
      // this.couponService.getCouponByIdRest(this.coupon.id).subscribe(c => {
      //   this.coupon = c;
      //   console.log(c)
      // }, err => {
      //   console.log("error:");
    
      // });

      this.company.name =this.nameFormControl.value;
      this.company.imageURL = this.imageURLFormControl.value;
      
      this.adminService.updateAdminCompanyRest(this.token, this.company.id, this.company ).subscribe(c => {
      
        this.company = c;
        
        console.log(c)
        alert("The Company " + c.name + " was updated succesfully")
    
      }, err => {
        console.log("error: Unable to update this company!" + err.message);
      });
}

// updateCompCoupon(){
//   this.coupon.id =this.idFormControl.value;
    
//   // this.couponService.getCouponByIdRest(this.coupon.id).subscribe(c => {
//   //   this.coupon = c;
//   //   console.log(c)
//   // }, err => {
//   //   console.log("error:");

//   // });

//   this.coupon.title =this.titleFormControl.value;

//   this.coupon.startDate =this.startDateFormControl.value;

//   this.coupon.endDate =this.endDateFormControl.value;

//   this.coupon.category =this.categoryFormControl.value;
//   this.coupon.amount= this.amountFormControl.value;

//   this.coupon.description=this.descriptionFormControl.value;  

//     this.coupon.price = this.priceFormControl.value;

//     this.coupon.imageURL = this.imageURLFormControl.value;
  
//   this.couponService.updateCompCouponRest(this.token,this.coupon ).subscribe(c => {
//     this.coupon = c;
    
//     console.log(c)
//     alert("The Coupon" + c.title + " was updated succesfully")

//   }, err => {
//     console.log("error:");
//   });
// }
  } 

 