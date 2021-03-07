import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/models/company';
import {Title} from '@angular/platform-browser';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-get-all-companies-and-delete',
  templateUrl: './admin-get-all-companies-and-delete.component.html',
  styleUrls: ['./admin-get-all-companies-and-delete.component.css']
})
export class AdminGetAllCompaniesAndDeleteComponent implements OnInit {
  public companies: Company[];
  public token: string = localStorage.getItem('token');

  constructor(private title: Title,
              private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Company');

    setTimeout(() => {
      this.adminService.getAllCompaniesAdmin(this.token).subscribe(companies => {
        this.companies = companies;

        console.dir(this.companies);
        console.log('Token: ' + localStorage.getItem('token'));
      }, err => {
        alert('Error:' + err.message);
      });

    }, 1000);
  }

  public deleteCompany(companyId: number) {
    this.adminService.deleteAdminCompany(this.token, companyId).subscribe(msg => {
      alert('Company has been successfully deleted!');
      window.location.reload();
      console.log('message:', msg);
    }, err => {
      console.log('error:' + err);
    });
  }

  public showImage(imageSource: string): void {
    alert('User clicked on image' + imageSource);
  }

}


