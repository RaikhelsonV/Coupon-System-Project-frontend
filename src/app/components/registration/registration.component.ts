import { Component} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  email: string = '';
  password: string= '';
  first_name: String;
  last_name: String;

  public constructor(private loginService: LoginService, private router: Router, private loginComponent: LoginComponent, private modeService: ModeService) { }

  public regCustomer() {
    this.loginService.registration(this.email, this.password, 1)
      .subscribe(token => {
        localStorage.setItem("token", token.token),
        this.router.navigate(["/home"]);

        this.modeService.mode = this.modeService.LOGGED_IN;
        this.modeService.setUsersClientType();
        console.log("New customer: " + this.email);
      }, err =>{
        alert("User with such email or password already exists.");
        console.log("User with such email or password already exists" + err.message);
      });
  }
 

  public regCompany() {
    this.loginService.registration(this.email, this.password, 2)
      .subscribe(token => {
        localStorage.setItem("token", token.token),
        this.router.navigate(["/comp-coup"]);

        this.modeService.mode = this.modeService.LOGGED_IN;
        this.modeService.setUsersClientType();
        console.log("New company" + this.email);
      }, err =>{
        alert("User with such email or password already exists.");
        console.log("User with such email or password already exists." + err.message);
      });
    }


  public ngOnInit(): void {
  }
}
