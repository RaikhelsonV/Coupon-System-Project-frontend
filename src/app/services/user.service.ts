import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public registration(email: string, password: string, role: number): Observable<any> {
    return this.httpClient.post<any>(this.url + 'reg/' + email + '/' + password + '/' + role, {
      responseType: 'json'
    });
  }

  public changeEmail(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.url + 'changeEmail/' + email + '/' + password, {
      responseType: 'json'
    });
  }

  public getUsersByEmailAndPassword(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(this.url + 'users/' + email + '/' + password, {
      responseType: 'json'
    });
  }

}
