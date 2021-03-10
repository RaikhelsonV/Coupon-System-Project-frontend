import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModeService } from 'src/app/services/mode.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  company = new Company();
  token: string = localStorage.getItem('token');
  id: any = localStorage.getItem('company_id');
  Validation: boolean = true;
  public email = localStorage.getItem('email');
  public password = localStorage.getItem('password');
  public user = new User();

  constructor(public companiesService: CompaniesService,
    public userService: UserService,
    public router: Router,
    public modeService: ModeService) {
  }

  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_COMPANY;
    this.companiesService.getCompany(this.token).subscribe(company => {
      this.company = company;
      console.log(company);
    }, err => {
      alert('Error:' + err.message);
    });
  }


  newEmailFormControl = new FormControl('');
  newPasswordFormControl = new FormControl('');


  myFormGroup = new FormGroup({
    newEmail: this.newEmailFormControl,
    newPassword: this.newPasswordFormControl,
  });

  UpdateCompany() {
    this.companiesService.updateCompany(this.token, this.company).subscribe(c => {
      this.company = c;
      this.router.navigate(['/company-coupons']);
      console.log(c);
      alert('The Company ' + c.name + ' was updated succesfully');
    }, err => {
      console.log('error: Unable to update this company!' + err.message);
    });
  }

  public UpdateUser() {
    this.userService.updateUser(this.email, this.password,
      this.newEmailFormControl.value, this.newPasswordFormControl.value).subscribe(user => {
        this.user = user;
        this.router.navigate(['/login']);
        console.log(user);
        alert('The User was updated successfully!');

      }, err => {
        this.router.navigate(['/login']);
        console.log('error: Unable to update this user!' + err.message);
      });
  }
}
