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

  public updateUser(email: string, password: string, newEmail: string, newPassword: string,): Observable<any> {
    return this.httpClient.post<any>(this.url +
      'update-user/' + email + '/' + password + '/' + newEmail + '/' + newPassword,
      {responseType: 'json'}
    );
  }

  public getUsersByEmailAndPassword(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(this.url + 'user/' + email + '/' + password, {
      responseType: 'json'
    });
  }


}
