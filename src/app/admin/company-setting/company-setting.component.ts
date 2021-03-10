import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/models/company';
import {Title} from '@angular/platform-browser';
import {AdminService} from 'src/app/services/admin.service';
import {ModeService} from '../../services/mode.service';

@Component({
  selector: 'app-company-setting',
  templateUrl: './company-setting.component.html',
  styleUrls: ['./company-setting.component.css']
})
export class CompanySettingComponent implements OnInit {
  public companies: Company[];
  public token: string = localStorage.getItem('token');

  constructor(public title: Title,
              public adminService: AdminService,
              public modeService: ModeService) {
  }

  ngOnInit(): void {
    this.modeService.clientType = this.modeService.ROLE_ADMIN;
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
    this.adminService.deleteAdminUserCompany(this.token, companyId).subscribe(msg => {
      alert('Company has been successfully deleted!');
      window.location.reload();
      console.log('message:', msg);
    }, err => {
      window.location.reload();
      console.log('Company has been successfully deleted!');
    });
  }

  public showImage(imageSource: string): void {
    alert('User clicked on image' + imageSource);
  }

}


