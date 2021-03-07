import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Coupon} from 'src/app/models/coupon';
import {Customer} from 'src/app/models/customer';
import {User} from 'src/app/models/user';
import {AdminService} from 'src/app/services/admin.service';
import {ModeService} from 'src/app/services/mode.service';

@Component({
  selector: 'app-customer-setting',
  templateUrl: './customer-setting.component.html',
  styleUrls: ['./customer-setting.component.css']
})
export class CustomerSettingComponent implements OnInit {

  public customers: Customer[];
  public users: User[];
  public coupons: Coupon[];
  public token: string = localStorage.getItem('token');
  public description: string;

  public constructor(private title: Title,
                     private modeService: ModeService,
                     private adminService: AdminService) {
  }

  public ngOnInit(): void {
    this.modeService.clientType = this.modeService.ROLE_ADMIN;
    this.title.setTitle('Customer');
    setTimeout(() => {
      this.adminService.getAllCustomers(this.token).subscribe(customers => {
        this.customers = customers;
        console.dir(this.customers);
        console.log('Token: ' + localStorage.getItem('token'));
      }, err => {
        alert('Error:' + err.message);
      });
    }, 1000);
  }

  public deleteCustomer(customerId: number) {
    this.adminService.deleteAdminUserCustomer(this.token, customerId).subscribe(msg => {
      alert('Customer and User has been successfully deleted!');
      window.location.reload();
      console.log('Customer and User has been successfully deleted!:', msg);
    }, err => {
      console.log('error:' + err);
    });

  }
}
