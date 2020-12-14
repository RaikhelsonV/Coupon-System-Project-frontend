import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Coupon } from '../models/coupon';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ModeService } from './mode.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService  {

  private compUrl = "/assets/json/companies.json";
  private url = 'http://localhost:8080/api/';
  
  constructor(private httpClient: HttpClient, private router: Router,public modeService:ModeService) { }
  
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //  if(this.modeService.clientType = '3'){
  //    return true;
  //  }
  //   return this.router.createUrlTree(['home']);
  // }

 
  public updateAdminCouponRest(token: string, coupon_id: number, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.url + "admin/" + token + "/updateCoupon/" + coupon_id, coupon , {withCredentials: true});
  }

  public updateAdminCompanyRest(token: string,company_id: number ,company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.url + "admin/" + token + "/updateCompany/"+ company_id , company, {withCredentials: true});
  }
  public updateAdminCustomerRest(token: string,customer_id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.url + "admin/" + token + "/updateCustomer/" + customer_id, customer, {withCredentials: true});
  }
  public deleteAdminCompanyRest(token: string, company_id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "admin/" + token + "/deleteCompany/" + company_id, {withCredentials: true});
  }

  public deleteAdminCustomerRest(token: string, customer_id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "admin/" + token + "/deleteCustomer/" + customer_id, {withCredentials: true});
  }
  public deleteAdminCouponRest(token: string, coupon_id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "admin/" + token + "/deleteCoupon/" + coupon_id, {withCredentials: true});
  }
  public addCustomerRest(token: string, customer: Customer):Observable<Customer> {
    return this.httpClient.post<Customer>(this.url + "admin/" + token + "/addCustomer", customer, { withCredentials: true});
  }
  public addCompanyRest(token: string, company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.url + "admin/" + token + "/addCompany", company, { withCredentials: true});
  }




}
