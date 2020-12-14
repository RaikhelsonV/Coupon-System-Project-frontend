import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { HomeComponent } from './page/home/home.component';
import { CouponComponent } from './page/coupon/coupon.component';
import { CustomerComponent } from './page/customer/customer.component';
import { Page404Component } from './page/page404/page404.component';
import { CompanyComponent } from './page/company/company.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './page-det/company-details/company-details.component';
import { CouponDetailsComponent } from './page-det/coupon-details/coupon-details.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { YoniComponent } from './yoni/yoni.component';
import { AddCompanyComponent } from './function/admin/add/add-company/add-company.component';
import { AddCustomerComponent } from './function/admin/add/add-customer/add-customer.component';
import { UpdateCompanyComponent } from './function/admin/update/update-company/update-company.component';
import { UpdateCouponComponent } from './function/admin/update/update-coupon/update-coupon.component';
import { UpdateCustomerComponent } from './function/admin/update/update-customer/update-customer.component';
import { MyAccountComponent } from './page-det/my-account/my-account.component';
import { SearchCouponComponent } from './page/search-coupon/search-coupon.component';
import { CouponCatComponent } from './page-det/coupon-cat/coupon-cat.component';
import { ComUpdateCompanyComponent } from './function/company/com-update-company/com-update-company.component';
import { ComUpdateCouponComponent } from './function/company/com-update-coupon/com-update-coupon.component';
import { ComAddCouponComponent } from './function/company/com-add-coupon/com-add-coupon.component';
import { CouponsTitleComponent } from './page-ser/coupons-title/coupons-title.component';
import { CouponsDescComponent } from './page-ser/coupons-desc/coupons-desc.component';
import { CouponsPriceComponent } from './page-ser/coupons-price/coupons-price.component';
import { UpdateUserComponent } from './function/customer/update-user/update-user.component';
import { CompCoupComponent } from './page/comp-coup/comp-coup.component';
import { AdCompComponent } from './admin/ad-comp/ad-comp.component';
import { AdCoupComponent } from './admin/ad-coup/ad-coup.component';
import { AdAccountComponent } from './admin/ad-account/ad-account.component';
import { CusUpdateCustomerComponent } from './function/customer/cus-update-customer/cus-update-customer.component';




@NgModule({
  
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MainComponent, HomeComponent, 
    CouponComponent, CustomerComponent,Page404Component, CompanyComponent, ThumbnailComponent,  CompanyDetailsComponent, 
    CouponDetailsComponent, MenuComponent, AddCompanyComponent, AddCustomerComponent, LoginComponent, UpdateCompanyComponent, 
    RegistrationComponent, UpdateCouponComponent, UpdateCustomerComponent, YoniComponent, MyAccountComponent, SearchCouponComponent,
    CouponCatComponent, ComUpdateCompanyComponent, ComUpdateCouponComponent, ComAddCouponComponent,
    CouponsTitleComponent, CouponsDescComponent, CouponsPriceComponent, UpdateUserComponent, CompCoupComponent, AdCompComponent,
    AdCoupComponent, AdAccountComponent, CusUpdateCustomerComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, LoginComponent,LayoutComponent,RegistrationComponent,SearchCouponComponent,CouponComponent, 
     CouponsTitleComponent, CouponsDescComponent, CouponsPriceComponent, CompCoupComponent, CompanyDetailsComponent],
  bootstrap: [LayoutComponent,]
})
export class AppModule { }
