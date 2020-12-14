import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public customer: Customer;
  public customers: Customer[];
  public _clientType: string;

  constructor (public modeService: ModeService, private router: Router) { }
  ngOnInit(): void {
   this.logout();
  }


  public logout(): void {
   localStorage.removeItem("token");
   this.modeService.mode = this.modeService.LOGGED_OUT;
   localStorage.setItem("role",null);
   this.router.navigate(["/"]);
 
  
    this.modeService.setUsersClientType();

    console.log("exit!!!!!!!");
   
  
    
  }
  // ngAfterViewChecked() {
  //   this.logout();
  //   this.changeDetectorRef.detectChanges();
  // }



}
