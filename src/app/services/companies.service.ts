import {Injectable} from '@angular/core';
import {Company} from '../models/company';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Coupon} from '../models/coupon';
import {Router} from '@angular/router';
import {ModeService} from './mode.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private compUrl = '/assets/json/companies.json';
  private url = 'http://localhost:8080/api/';

  public constructor(private httpClient: HttpClient, private router: Router, private modeService: ModeService) {
  }

  public getCompany(token: string): Observable<Company> {
    return this.httpClient.get<Company>(this.url + 'company/' + token, {withCredentials: true});
  }

  public getAllCompanyCoupons(token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'company-coupons/' + token);
  }

  public updateCompany(token: string, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.url + token + '/update-company', company, {withCredentials: true});
  }

  public updateCoupon(token: string, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.url + token + '/update-coupon', coupon, {withCredentials: true});
  }

  public addCoupon(token: string, coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.url + token + '/add-coupon', coupon, {withCredentials: true});
  }

  public deleteCoupon(token: string, couponId: number): Observable<Coupon> {
    return this.httpClient.delete<Coupon>(this.url + token + '/delete-coupon/' + couponId, {withCredentials: true});
  }


}
