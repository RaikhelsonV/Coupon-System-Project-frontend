import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  public readonly LOGGED_IN: string = 'LOGGED_IN';
  public readonly LOGGED_OUT: string = 'LOGGED_OUT';
  mode: string = this.LOGGED_OUT;
  clientType: string;

  public readonly ROLE_USER: string = '0';
  public readonly ROLE_CUSTOMER: string = '1';
  public readonly ROLE_COMPANY: string = '2';
  public readonly ROLE_ADMIN: string = '3';

  public constructor() {
  }

  public setClientType() {

    const role = localStorage.getItem('role');

    switch (role) {
      case this.ROLE_CUSTOMER:
        this.clientType = this.ROLE_CUSTOMER;
        break;
      case this.ROLE_COMPANY:
        this.clientType = this.ROLE_COMPANY;
        break;
      case this.ROLE_ADMIN:
        this.clientType = this.ROLE_ADMIN;
        break;

    }
    console.log(this.clientType);
    console.log(role);
    console.log(this.mode);
  }
}
