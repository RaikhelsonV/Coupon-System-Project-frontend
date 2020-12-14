import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private url = 'http://localhost:8080/api/';
  private token: string = localStorage.getItem("token");

 
  public readonly ROLE_CUSTOMER: string = '1';
  public readonly ROLE_COMPANY: string = '2';
  public readonly ROLE_ADMIN: string = '3';
  public _clientType: string = null;
  
  public readonly LOGGED_IN: string = 'LOGGED_IN';
  public readonly LOGGED_OUT: string = 'LOGGED_OUT';
  public mode: string = this.LOGGED_OUT;

  public constructor(private httpClient: HttpClient) {}

  get clientType(): string {
    if (this._clientType !== null) {
          return this._clientType;
    }
       return this._clientType = localStorage.getItem('role');
  }

  set clientType(type: string) {
    this._clientType = type;
  }

  public getClientTypeRest(token: string): Observable<String> {
    return this.httpClient.get<String>(this.url + "getAccount/"+ token ,{ responseType: 'json' } );
  }


  public setUsersClientType() {
    if (this.token !== null) {
      this.getClientTypeRest(this.token)
        .subscribe(role => {
          console.log("setUsersClientType(): " + role);
          if (role == this.ROLE_CUSTOMER) {
            localStorage.setItem('role', this.ROLE_CUSTOMER);
         
          } else if (role == this.ROLE_COMPANY) {
            localStorage.setItem('role', this.ROLE_COMPANY);
           
          } else if (role == this.ROLE_ADMIN) {
            localStorage.setItem('role', this.ROLE_ADMIN);
         
          };
          this._clientType = localStorage.getItem('role');
           console.log("Actual role after setter: " + this._clientType);
          localStorage.setItem('role', this._clientType);
          console.log("Actual role after setter: " + this._clientType);

          console.log(role);
        }, err =>{
          console.log("error:" + err);
        } );

    } else this._clientType = null; }


}

