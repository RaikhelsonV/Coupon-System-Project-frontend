import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Coupon} from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public getCustomer(token: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + 'customer/' + token, {withCredentials: true});
  }

  public getCustomerById(token: string, id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + 'customer-id/' + token + '/' + id, {withCredentials: true});
  }

  public getAllCustomerCoupons(token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer-coupons/' + token);
  }
  public getAllCustomerCouponsShoppingCart(token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer-coupons-shopping-cart/' + token);
  }

  public getAllCustomerCouponsTotalPrice(token: string): Observable<any> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer-coupons-price/' + token);
  }

  public getCouponsByDescriptionLike(token: string, description: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer/' + token + '/coupons-description/' + description, {withCredentials: true});
  }

  public getCouponsByTitle(token: string, title: string) {
    return this.httpClient.get<Coupon[]>(this.url + 'customer/' + token + '/coupons-title/' + title, {withCredentials: true});
  }

  public getAllCouponsByPriceLessThan(token: string, price: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer/' + token + '/coupons-price-less-than/' + price, {withCredentials: true});
  }

  public updateCustomer(token: string, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.url + token + '/update-customer', customer, {withCredentials: true});
  }

  public releaseCusCoupon(token: string, couponId: number): Observable<any> {
    return this.httpClient.post<any>(this.url + 'customer/' + token + '/release-coupon/' + couponId, {withCredentials: true});
  }

  public purchaseCoupon(token: string, couponId: number): Observable<any> {
    return this.httpClient.post<any>(this.url + 'customer/' + token + '/purchase-coupon/' + couponId, {withCredentials: true});
  }


}

