import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {Company} from '../models/company';
import {Coupon} from '../models/coupon';
import {Router} from '@angular/router';
import {ModeService} from './mode.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private compUrl = '/assets/json/companies.json';
  private url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient, private router: Router, public modeService: ModeService) {
  }

  public getAllCustomers(token: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + 'admin/' + token + '/customers');
  }

  public getAllUsers(token: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + 'admin/' + token + '/users');
  }

  public getAllCompaniesAdmin(token: string): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url + 'admin/' + token + '/companies');
  }

  public getAllCouponsAdmin(token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'admin/' + token + '/coupons', {withCredentials: true});
  }

  public updateAdminCoupon(token: string, couponId: number, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.url + 'admin/' + token + '/update-coupon/' + couponId, coupon, {withCredentials: true});
  }

  public updateAdminCustomer(token: string, customerId: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.url + 'admin/' + token + '/update-getAllCustomers/' + customerId, customer, {withCredentials: true});
  }

  public updateAdminCompany(token: string, companyId: number, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.url + 'admin/' + token + '/update-company/' + companyId, company, {withCredentials: true});
  }

  public deleteAdminCustomer(token: string, customerId: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-customer/' + customerId, {withCredentials: true});
  }

  public deleteAdminUserCustomer(token: string, customerId: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-user-customer/' + customerId, {withCredentials: true});
  }

  public deleteAdminUserCompany(token: string, companyId: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-user-company/' + companyId, {withCredentials: true});
  }

  public deleteAdminCompany(token: string, companyId: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-company/' + companyId, {withCredentials: true});
  }

  public deleteAdminCoupon(token: string, couponId: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-coupon/' + couponId, {withCredentials: true});
  }

  /////////////////////////////////////////////////////////////////

  public addCustomer(token: string, customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.url + 'admin/' + token + '/addCustomer', customer, {withCredentials: true});
  }

  public addCompany(token: string, company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.url + 'admin/' + token + '/addCompany', company, {withCredentials: true});
  }


}
