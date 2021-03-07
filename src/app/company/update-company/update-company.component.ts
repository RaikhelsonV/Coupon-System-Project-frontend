import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/models/company';
import {CompaniesService} from 'src/app/services/companies.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  company = new Company();
  token: string = localStorage.getItem('token');
  id:any = localStorage.getItem('company_id');
  Validation: boolean = true;

  constructor(private companiesService: CompaniesService, public router: Router,public modeService: ModeService) {
  }
 
  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_COMPANY;
    this.companiesService.getCompanyRest(this.token).subscribe(company => {
      this.company = company;
      console.log(company);
    }, err => {
      alert('Error:' + err.message);
    });
  }

  idFormControl = new FormControl(localStorage.getItem('company_id'));
  nameFormControl = new FormControl('');
  imageURLFormControl = new FormControl('', [Validators.required, Validators.maxLength(2000)]);

  myFormGroup = new FormGroup({
    id: this.idFormControl,
    name: this.nameFormControl,
    imageURL: this.imageURLFormControl,
  });

  UpdateCompany() {
    this.company.id = this.idFormControl.value;
    this.company.name = this.nameFormControl.value;
    this.company.imageURL = this.imageURLFormControl.value;

    this.companiesService.updateCompanyRest(this.token, this.id,this.company).subscribe(c => {
      this.company = c;
      this.router.navigate(['/company-coupons']);
      console.log(c);
      alert('The Company ' + c.name + ' was updated succesfully');
    }, err => {
      console.log('error: Unable to update this company!' + err.message);
    });
  }
}
