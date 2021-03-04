import {Component, OnInit} from '@angular/core';
import {CompaniesService} from 'src/app/services/companies.service';
import {Company} from 'src/app/models/company';
import {Title} from '@angular/platform-browser';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-get-all-companies-and-delete',
  templateUrl: './admin-get-all-companies-and-delete.component.html',
  styleUrls: ['./admin-get-all-companies-and-delete.component.css']
})
export class AdminGetAllCompaniesAndDeleteComponent implements OnInit {
  public showImage(imageSource: string): void {
    alert('User clicked on image' + imageSource);
  }

  public companies: Company[];
  token: string = localStorage.getItem('token');

  constructor(private companiesService: CompaniesService, private title: Title,
              private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Company');

    setTimeout(() => {
      this.companiesService.getAllCompaniesAdmin(this.token).subscribe(companies => {
        this.companies = companies;

        console.dir(this.companies);
        console.log('Token: ' + localStorage.getItem('token'));
      }, err => {
        alert('Error:' + err.message);
      });

    }, 1000);
  }

  public deleteCompany(company_id: number) {
    this.adminService.deleteAdminCompanyRest(this.token, company_id).subscribe(msg => {
      alert('Company has been succesfully deleted!');
      console.log('message:', msg);
    }, err => {
      console.log('error:' + err);
    });

  }

}


