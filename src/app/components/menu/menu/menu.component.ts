import {Component, OnInit} from '@angular/core';
import {ModeService} from 'src/app/services/mode.service';
import {Router} from '@angular/router';
import {Customer} from 'src/app/models/customer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public customer: Customer;
  public customers: Customer[];

  public constructor(public modeService: ModeService, public router: Router) {
  }
  ngOnInit(): void {
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.modeService.mode = this.modeService.LOGGED_OUT;
    this.modeService.clientType = this.modeService.ROLE_USER;
    this.router.navigate(['/']);
    console.log('exit!!!!!!!');
  }
}
