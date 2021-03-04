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

  public getCustomerById(token: String, id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + 'customer-id/' + token + '/' + id, {withCredentials: true});
  }

  public getAllCustomerCoupons(token: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer-coupons/' + token);
  }
  public getAllCustomerCouponsTotalPrice(token: string): Observable<any> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer-coupons-price/' + token);
  }

  public getCouponsByDescriptionLikeRest(token: string, description: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer/' + token + '/coupons-description/' + description, {withCredentials: true});
  }

  public getCouponsByTitleRest(token: string, title: string) {
    return this.httpClient.get<Coupon[]>(this.url + 'customer/' + token + '/coupons-title/' + title, {withCredentials: true});
  }

  public getAllCouponsByPriceLessThan(token: string, price: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + 'customer/' + token + '/coupons-price-less-than/' + price, {withCredentials: true});
  }

  public updateCustomerRest(token: string, customer_id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.url + token + '/update-customer/' + customer_id, customer, {withCredentials: true});
  }

  public releaseCusCouponRest(token: string, coupon_id: number): Observable<any> {
    return this.httpClient.post<any>(this.url + 'customer/' + token + '/release-coupon/' + coupon_id, {withCredentials: true});
  }
  public purchaseCoupon(token: String, coupon_id: number): Observable<any> {
    return this.httpClient.post<any>(this.url + 'customer/' + token + '/purchase-coupon/' + coupon_id, {withCredentials: true});
  }
  public changeAmount(token: String, coupon_id: number, amount:number): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.url + token + '/change-amount/' + coupon_id +'/' +amount, {withCredentials: true});
  }

//////////////////////////////////////////////////////////////////
  public getAllCustomersRest(token: String): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + 'admin/' + token + '/getAllCustomers');

  }





}

