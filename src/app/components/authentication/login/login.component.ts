import {Component} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {Router} from '@angular/router';
import {ModeService} from 'src/app/services/mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  public constructor(public modeService: ModeService,
                     public loginService: LoginService,
                     public router: Router) {
  }

  public getRole() {
    this.loginService.role(this.email, this.password).subscribe(role => {
      localStorage.setItem('role', role);
      console.dir(role);
      this.modeService.setClientType();
      this.login();
      console.dir(this.modeService);
    }, err => {
      alert('Error:' + err.message);
    });
  }

  public login() {
    this.loginService.login(this.email, this.password).subscribe(token => {
      localStorage.setItem('token', token.token),
        this.modeService.mode = this.modeService.LOGGED_IN;
      this.router.navigate(['/home']);
      console.dir(this.modeService);
    });
    err => alert(err);
  }

  public register(): void {
    this.router.navigate(['/registration']);
  }

  public ngOnInit(): void {
  }


}
