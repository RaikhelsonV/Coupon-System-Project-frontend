import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private url = 'http://localhost:8080/api/';

  constructor(public datepipe: DatePipe, private httpClient: HttpClient) {
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'user/coupons', { withCredentials: true });
  }
  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url + 'user/companies', { withCredentials: true });
  }
  public getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.url + 'company-id/' + id, { withCredentials: true });
  }
  public getAllCompanyCoupons(id: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'company-id-coupons/' + id, { withCredentials: true });
  }


}
