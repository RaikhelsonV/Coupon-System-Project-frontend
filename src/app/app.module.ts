import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/sections/header/header.component';
import {FooterComponent} from './components/sections/footer/footer.component';
import {MainComponent} from './components/sections/main/main.component';
import {HomeComponent} from './page/home/home.component';
import {CouponComponent} from './page/coupon/coupon.component';
import {CustomerComponent} from './customer/customer/customer.component';
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
import {AddCompanyComponent} from './admin/add-company/add-company.component';
import {AddCustomerComponent} from './admin/add-customer/add-customer.component';
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
import {UpdateUserComponent} from './customer/update-user/update-user.component';
import {CompanyCouponsComponent} from './company/comp-coup/company-coupons.component';
import {AdminGetAllCompaniesAndDeleteComponent} from './admin/getAllComapaniesAndDelete/admin-get-all-companies-and-delete.component';
import {GetAllCouponsAndDeleteComponent} from './admin/getAllCouponsAndDelete/get-all-coupons-and-delete.component';
import {AdminAccountComponent} from './admin/account/admin-account.component';
import {CusUpdateCustomerComponent} from './customer/update-customer/cus-update-customer.component';
import {RootComponent} from './components/authentication/root/root.component';
import {MenuAdminComponent} from './components/menu/menu-admin/menu-admin.component';
import {MenuCompanyComponent} from './components/menu/menu-company/menu-company.component';
import {MenuCustomerComponent} from './components/menu/menu-customer/menu-customer.component';


@NgModule({

  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MainComponent, HomeComponent,
    CouponComponent, CustomerComponent, Page404Component, CompanyComponent, ThumbnailComponent, CompanyDetailsComponent,
    CouponDetailsComponent, MenuComponent, AddCompanyComponent, AddCustomerComponent, LoginComponent, UpdateCompanyComponent,
    RegistrationComponent, AdminUpdateCouponComponent, AdminUpdateCustomerComponent, YoniComponent, CustomerAccountComponent, SearchCouponComponent,
    CouponCategoryComponent, UpdateCompanyComponent, ComUpdateCouponComponent, AddCouponComponent,
    CouponsTitleComponent, CouponsDescriptionComponent, CouponsPriceComponent, UpdateUserComponent, CompanyCouponsComponent, AdminGetAllCompaniesAndDeleteComponent,
    GetAllCouponsAndDeleteComponent, AdminAccountComponent, CusUpdateCustomerComponent, RootComponent, MenuAdminComponent, MenuCompanyComponent, MenuCustomerComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, LoginComponent, LayoutComponent, RegistrationComponent, SearchCouponComponent, CouponComponent,
    CouponsTitleComponent, CouponsDescriptionComponent, CouponsPriceComponent, CompanyCouponsComponent, CompanyDetailsComponent],
  bootstrap: [LayoutComponent,]
})
export class AppModule {
}
