import {Component} from '@angular/core';
import {Company} from 'src/app/models/company';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {
  public token: string = localStorage.getItem('token');
  public company = new Company();

  public constructor(private adminService: AdminService) {
  }

  public addCompany(): void {
    alert(`
    Name: ${this.company.name}
    ImageURL: ${this.company.imageURL}
    `);
    this.adminService.addCompany(this.token, this.company).subscribe(company => {
      alert('Company has been successfully added! Company ID: ' + company.id);
    }, err => {
      alert('error: Unable to add this company!' + err.message);
    });
  }
}
