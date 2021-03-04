import {Component} from '@angular/core';
import {Company} from 'src/app/models/company';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-update-company',
  templateUrl: './admin-update-company.component.html',
  styleUrls: ['./admin-update-company.component.css']
})
export class AdminUpdateCompanyComponent {
  company = new Company();
  token: string = localStorage.getItem('token');
  Validation: boolean = true;

  constructor(private adminService: AdminService) {
  }

  idFormControl = new FormControl(localStorage.getItem('company_id'));
  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[A-Za-z].*$')]);
  imageURLFormControl = new FormControl('', [Validators.required, Validators.maxLength(2000)]);

  myFormGroup = new FormGroup({
    id: this.idFormControl,
    name: this.nameFormControl,
    imageURL: this.imageURLFormControl
  });

  public UpdateCompany() {
    this.company.id = this.idFormControl.value;
    this.company.name = this.nameFormControl.value;
    this.company.imageURL = this.imageURLFormControl.value;

    this.adminService.updateAdminCompanyRest(this.token, this.company.id, this.company)
      .subscribe(c => {
        this.company = c;
        console.log(c);
        alert('The Company ' + c.name + ' was updated succesfully');
      }, err => {
        console.log('error: Unable to update this company!' + err.message);
      });
  }
}

