import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/api/';

  public constructor(private httpClient: HttpClient) {
  }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.url + 'login/' + email + '/' + password,
      {responseType: 'json'});
  }

  public role(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(this.url + 'role/' + email + '/' + password,
      {responseType: 'json'});
  }


}


