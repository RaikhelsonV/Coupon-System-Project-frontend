export class CouponShoppingCart {
  public constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public category?: string,
    public pricePurchasedCoupon?: number,
    public amountPurchasedCoupons?: number,
    public imageURL?: string) {
  }
}

