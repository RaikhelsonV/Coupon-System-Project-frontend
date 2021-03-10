import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ModeService} from 'src/app/services/mode.service';
import {Company} from 'src/app/models/company';
import {Customer} from 'src/app/models/customer';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public company: Company = new Company();
  public customer: Customer = new Customer();
  email: string = '';
  password: string = '';

  public constructor(public userService: UserService, public router: Router, private modeService: ModeService) {
  }

  public regCustomer() {
    this.userService.registration(this.email, this.password, 1)
      .subscribe(token => {
        localStorage.setItem('token', token.token),
        localStorage.setItem('email', this.email),
        localStorage.setItem('password', this.password),

          this.router.navigate(['/customer-account']);
        this.modeService.clientType = this.modeService.ROLE_CUSTOMER;
        console.log('New customer: ' + this.email);
      });
    err => alert(err);
  }

  public regCompany() {
    this.userService.registration(this.email, this.password, 2)
      .subscribe(token => {
        localStorage.setItem('token', token.token),
        localStorage.setItem('email', this.email),
        localStorage.setItem('password', this.password),
          this.router.navigate(['/home']);
        this.modeService.clientType = this.modeService.ROLE_COMPANY;
        console.log('New company: ' + this.email);
      });
    err => alert(err);
  }

}
