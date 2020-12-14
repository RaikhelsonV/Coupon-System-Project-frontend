import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { DatePipe } from '@angular/common';
import { Observable,of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
  
})
export class CouponService {

    
    private url = 'http://localhost:8080/api/';

  constructor(public datepipe: DatePipe, private httpClient: HttpClient) { }

  //public getAllCouponHttp( ): Observable<Coupon[]>{
  //  return this.httpClient.get<Coupon[]>("/assets/json/coupon.json");  
  // }

  public getAllCouponsRest(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url  + "getAllCoupons", {withCredentials: true});
  }
  public getAllCoup(token: String): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + "admin/" + token + "/getAllCoup",{withCredentials: true});}


  public getCouponByIdRest(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.url +"getCouponById/" + id,{withCredentials: true});
  }
  public getCouponByCategoryRest(category: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url  + "getAllCouponsByCategory/"+ category,{withCredentials: true});
  }
  public getCouponByCustIdRest(token: String): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.url +"getCouponById/" + token,{withCredentials: true});
  }
  
  public getAllCompanyCouponsR(id: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.url + "comCoup/" + id, { withCredentials: true });
  }

 


 




  
 /* public getAllCoupon(): Coupon[]{
    const arr: Coupon[] = [];
    let start_date = this.datepipe.transform(new Date(1209, 2, 27), 'MM-dd-yyyyy')
    let end_date = this.datepipe.transform(new Date(1989, 2, 27), 'MM-dd-yyyyy')

    arr.push(new Coupon(1, 20, 1, "bigrafh",end_date,  "http://", 1000, start_date, "KrasnoeSol"));
      arr.push(new Coupon(2, 30, 2, "roman", end_date, "http://", 1100, start_date,"Reed Elsevier"));
      arr.push(new Coupon(3,  40, 3, "detective", end_date, "http://", 1200, start_date,"Thomson Reuters"));
    return arr;
  }

  public getAllCouponAsync3( ): Observable<Coupon[]>{
    return Observable.create(observable => {
      setTimeout(()=>{
        try{
          const arr: Coupon[] = [];
          let end_date = this.datepipe.transform(new Date(1989, 2, 27), 'MM-dd-yyyyy')
          let start_date = this.datepipe.transform(new Date(1209, 2, 27), 'MM-dd-yyyyy')

           arr.push(new Coupon(1, 20, 1, "bigrafh",end_date,  "http://", 1000, start_date, "KrasnoeSol"));
           arr.push(new Coupon(2, 30, 2, "roman", end_date, "http://", 1100, start_date,"Reed Elsevier"));
           arr.push(new Coupon(3,  40, 3, "detective", end_date, "http://", 1200, start_date,"Thomson Reuters"));
          observable.next(arr);
        }
        catch (err){
          observable.error(err);
          } 
      }, 3000);
      observable.next()
    }); 
  }
  
*/


  }
