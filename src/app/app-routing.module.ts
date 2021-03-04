import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {CouponComponent} from './page/coupon/coupon.component';
import {CustomerComponent} from './customer/customer/customer.component';
import {Page404Component} from './page/page404/page404.component';
import {CompanyComponent} from './page/company/company.component';
import {CompanyDetailsComponent} from './page/company-details/company-details.component';
import {CouponDetailsComponent} from './company/coupon-details/coupon-details.component';
import {LoginComponent} from './components/authentication/login/login.component';
import {RegistrationComponent} from './components/authentication/registration/registration.component';
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
import {AdminAccountComponent} from './admin/account/admin-account.component';
import {AdminGetAllCompaniesAndDeleteComponent} from './admin/getAllComapaniesAndDelete/admin-get-all-companies-and-delete.component';
import {GetAllCouponsAndDeleteComponent} from './admin/getAllCouponsAndDelete/get-all-coupons-and-delete.component';
import {CusUpdateCustomerComponent} from './customer/update-customer/cus-update-customer.component';
import {AdminUpdateCompanyComponent} from './admin/update-company/admin-update-company.component';
import {PlaceOfSalesComponent} from './customer/place-of-sales/place-of-sales.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search-coupon', component: SearchCouponComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},

  {path: 'company', component: CompanyComponent},
  {path: 'coupon', component: CouponComponent},

  {path: 'company-details/:id', component: CompanyDetailsComponent},
  {path: 'coupon-details/:id', component: CouponDetailsComponent},
  {path: 'coupon-category/:category', component: CouponCategoryComponent},
  {path: 'customer-account', component: CustomerAccountComponent},
  {path: 'admin-account', component: AdminAccountComponent},

  /*Admin*/
  {path: 'admin-update-company', component: AdminUpdateCompanyComponent},
  {path: 'admin-update-coupon', component: AdminUpdateCouponComponent},
  {path: 'admin-add-coupon', component: GetAllCouponsAndDeleteComponent},
  {path: 'admin-update-customer', component: AdminUpdateCustomerComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'getAllComapaniesAndDelete', component: AdminGetAllCompaniesAndDeleteComponent},
  {path: 'customer', component: CustomerComponent},

  /*Customer*/
  {path: 'coupons-title', component: CouponsTitleComponent},
  {path: 'coupons-description', component: CouponsDescriptionComponent},
  {path: 'coupons-price', component: CouponsPriceComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'update-customer', component: CusUpdateCustomerComponent},
  {path: 'sales/:id', component: PlaceOfSalesComponent},

  /*Company*/
  {path: 'update-company', component: UpdateCompanyComponent},
  {path: 'update-coupon', component: ComUpdateCouponComponent},
  {path: 'add-coupon', component: AddCouponComponent},
  {path: 'company-coupons', component: CompanyCouponsComponent},


  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
