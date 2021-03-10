import {Coupon} from './coupon';

export class Customer {
  public constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public amountPurchasedCoupons?: number,
    public coupons?: Coupon[]) {
  }
}
