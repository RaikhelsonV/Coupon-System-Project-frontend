import { Component } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent  {
  token: string = localStorage.getItem("token");

  public company = new Company();

  public constructor(private adminService: AdminService) { }

  public addCompany(): void {
    alert(`
    Name: ${this.company.name}
    ImageURL: ${this.company.imageURL}
    `);
    this.adminService.addCompanyRest(this.token,this.company).subscribe( p => {
      alert("Company has been succesfully added! Company ID: " + p.id);
    }, err => {
      alert("error: Unable to add this company!" + err.message);
    })
  }



}
