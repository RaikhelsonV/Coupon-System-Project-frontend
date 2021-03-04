import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ModeService} from 'src/app/services/mode.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {

  public constructor(public modeService: ModeService, public router: Router) {
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.modeService.mode = this.modeService.LOGGED_OUT;
    this.modeService.clientType = this.modeService.ROLE_USER;
    this.router.navigate(['/']);
    console.log('exit!!!!!!!');
  }
}
