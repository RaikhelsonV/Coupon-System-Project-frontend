import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {Company} from '../models/company';
import {Coupon} from '../models/coupon';
import {Router} from '@angular/router';
import {ModeService} from './mode.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private compUrl = '/assets/json/companies.json';
  private url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient, private router: Router, public modeService: ModeService) {
  }

  public updateAdminCouponRest(token: string, coupon_id: number, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.url + 'admin/' + token + '/update-coupon/' + coupon_id, coupon, {withCredentials: true});
  }

  public updateAdminCustomerRest(token: string, customer_id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.url + 'admin/' + token + '/update-customer/' + customer_id, customer, {withCredentials: true});
  }

  public updateAdminCompanyRest(token: string, company_id: number, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.url + 'admin/' + token + '/update-company/' + company_id, company, {withCredentials: true});
  }

  public deleteAdminCustomerRest(token: string, customer_id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-customer/' + customer_id, {withCredentials: true});
  }

  public deleteAdminCompanyRest(token: string, company_id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-company/' + company_id, {withCredentials: true});
  }

  public deleteAdminCouponRest(token: string, coupon_id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'admin/' + token + '/delete-coupon/' + coupon_id, {withCredentials: true});
  }

  /////////////////////////////////////////////////////////////////

  public addCustomerRest(token: string, customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.url + 'admin/' + token + '/addCustomer', customer, {withCredentials: true});
  }

  public addCompanyRest(token: string, company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.url + 'admin/' + token + '/addCompany', company, {withCredentials: true});
  }


}
