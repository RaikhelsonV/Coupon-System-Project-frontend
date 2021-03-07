import {Injectable} from '@angular/core';
import {Coupon} from '../models/coupon';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class CouponService {
  private url = 'http://localhost:8080/api/';

  constructor(public datepipe: DatePipe, private httpClient: HttpClient) {
  }

  public getCouponById(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.url + 'coupon-id/' + id, {withCredentials: true});
  }

  public getCouponByCategory(category: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'coupons-category/' + category, {withCredentials: true});
  }

/////////////////////////////////////////////////////////////////////////
  public getCouponByCustomerId(token: string): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.url + 'getCouponById/' + token, {withCredentials: true});
  }

}
