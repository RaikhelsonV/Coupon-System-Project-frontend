import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/api/';

  public constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any> (
      this.url + "login/" + email + "/" + password,
       {responseType: 'json'});
  }
  public registration(email: string, password: string, role: number): Observable<any>{
    return this.httpClient.post<any>(this.url + "reg/"+ email + "/" + password+"/"+ role,{
      responseType: 'json'
    });
    
  }
  // public registrationCus(email: string, password: string, role: number,first_name: String, last_name: String): Observable<any>{
  //   return this.httpClient.post<any>(this.url + "reg/"+ email + "/" + password+"/"+ role +"/"+first_name+"/"+last_name,{
  //     responseType: 'json'
  //   });
    
  }
  

