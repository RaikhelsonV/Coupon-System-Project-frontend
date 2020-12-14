import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';
 
  public constructor(private modeService: ModeService,
    private loginService: LoginService,
    private router: Router) { }

    public login() {
      this.loginService.login(this.email, this.password)
        .subscribe(token => {
          localStorage.setItem("token", token.token),
          this.router.navigate(["/home"]);
          this.modeService.setUsersClientType();
        }, err =>{
          alert("You need to create a user account.");
          console.log("You need to create a user account." + err.message);
        });
    }
  
    public loginReg(email: string, password: string) {
      this.loginService.login(email, password)
        .subscribe(token => {
          localStorage.setItem("token", token.token),
            console.log(token.token),
            this.router.navigate(["/home"]);
          }, err =>{
            alert("You need to create a user account.");
            console.log("You need to create a user account." + err.message);
          });
    }
  
    public register(): void {
      this.router.navigate(["/registration"]);
    }
  
    public ngOnInit(): void {
    }
  

}
