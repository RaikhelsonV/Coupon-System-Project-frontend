import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/sections/header/header.component';
import {FooterComponent} from './components/sections/footer/footer.component';
import {MainComponent} from './components/sections/main/main.component';
import {HomeComponent} from './page/home/home.component';
import {CouponComponent} from './page/coupon/coupon.component';
import {Page404Component} from './page/page404/page404.component';
import {CompanyComponent} from './page/company/company.component';
import {ThumbnailComponent} from './components/thumbnail/thumbnail.component';
import {DatePipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CompanyDetailsComponent} from './page/company-details/company-details.component';
import {CouponDetailsComponent} from './company/coupon-details/coupon-details.component';
import {MenuComponent} from './components/menu/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './components/authentication/login/login.component';
import {RegistrationComponent} from './components/authentication/registration/registration.component';

import {YoniComponent} from './yoni/yoni.component';
import {AdminUpdateCouponComponent} from './admin/update-coupon/admin-update-coupon.component';
import {AdminUpdateCustomerComponent} from './admin/update-customer/admin-update-customer.component';
import {CustomerAccountComponent} from './customer/customer-account/customer-account.component';
import {SearchCouponComponent} from './search/search-coupon/search-coupon.component';
import {CouponCategoryComponent} from './company/coupon-category/coupon-category.component';
import {UpdateCompanyComponent} from './company/update-company/update-company.component';
import {ComUpdateCouponComponent} from './company/update-coupon/com-update-coupon.component';
import {AddCouponComponent} from './company/add-coupon/add-coupon.component';
import {CouponsTitleComponent} from './search/coupons-title/coupons-title.component';
import {CouponsDescriptionComponent} from './search/coupons-desc/coupons-description.component';
import {CouponsPriceComponent} from './search/coupons-price/coupons-price.component';
import {CompanyCouponsComponent} from './company/comp-coup/company-coupons.component';
import {CompanySettingComponent} from './admin/company-setting/company-setting.component';
import {CouponSettingComponent} from './admin/coupon-setting/coupon-setting.component';
import {AdminAccountComponent} from './admin/account/admin-account.component';
import {CusUpdateCustomerComponent} from './customer/update-customer/cus-update-customer.component';
import {RootComponent} from './components/authentication/root/root.component';
import {MenuAdminComponent} from './components/menu/menu-admin/menu-admin.component';
import {MenuCompanyComponent} from './components/menu/menu-company/menu-company.component';
import {MenuCustomerComponent} from './components/menu/menu-customer/menu-customer.component';
import { CustomerSettingComponent } from './admin/customer-setting/customer-setting.component';


@NgModule({

  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MainComponent, HomeComponent,
    CouponComponent, Page404Component, CompanyComponent, ThumbnailComponent, CompanyDetailsComponent,
    CouponDetailsComponent, MenuComponent, LoginComponent, UpdateCompanyComponent,
    RegistrationComponent, AdminUpdateCouponComponent, AdminUpdateCustomerComponent, YoniComponent, CustomerAccountComponent, SearchCouponComponent,
    CouponCategoryComponent, UpdateCompanyComponent, ComUpdateCouponComponent, AddCouponComponent,
    CouponsTitleComponent, CouponsDescriptionComponent, CouponsPriceComponent, CompanyCouponsComponent, CompanySettingComponent,
    CouponSettingComponent, AdminAccountComponent, CusUpdateCustomerComponent,
    RootComponent, MenuAdminComponent, MenuCompanyComponent, MenuCustomerComponent, CustomerSettingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, LoginComponent, LayoutComponent, RegistrationComponent, SearchCouponComponent, CouponComponent,
    CouponsTitleComponent, CouponsDescriptionComponent, CouponsPriceComponent, CompanyCouponsComponent, CompanyDetailsComponent],
  bootstrap: [LayoutComponent]
})
export class AppModule {
}
