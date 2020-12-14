import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CouponComponent } from './page/coupon/coupon.component';
import { CustomerComponent } from './page/customer/customer.component';
import { Page404Component } from './page/page404/page404.component';
import { CompanyComponent } from './page/company/company.component';
import { CompanyDetailsComponent } from './page-det/company-details/company-details.component';
import { CouponDetailsComponent } from './page-det/coupon-details/coupon-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddCompanyComponent } from './function/admin/add/add-company/add-company.component';
import { AddCustomerComponent } from './function/admin/add/add-customer/add-customer.component';
import { UpdateCompanyComponent } from './function/admin/update/update-company/update-company.component';
import { UpdateCouponComponent } from './function/admin/update/update-coupon/update-coupon.component';
import { UpdateCustomerComponent } from './function/admin/update/update-customer/update-customer.component';
import { AdminService } from './services/admin.service';
import { CompaniesService } from './services/companies.service';
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
import { AdAccountComponent } from './admin/ad-account/ad-account.component';
import { AdCompComponent } from './admin/ad-comp/ad-comp.component';
import { AdCoupComponent } from './admin/ad-coup/ad-coup.component';
import { CusUpdateCustomerComponent } from './function/customer/cus-update-customer/cus-update-customer.component';




const routes: Routes = [
  

  {path: "home", component: HomeComponent },
  {path: "search-coupon", component: SearchCouponComponent },
  {path: 'login', component: LoginComponent},
  
  {path: 'registration', component: RegistrationComponent},

  {path: "company", component: CompanyComponent},
  {path: "coupon", component: CouponComponent},

  {path: "company-details/:id", component: CompanyDetailsComponent},
  {path: "coupon-details/:id", component: CouponDetailsComponent},
  {path: "coupon-cat/:category", component: CouponCatComponent},
  {path: "my-account", component: MyAccountComponent},
  {path: "ad-account", component: AdAccountComponent},



/*Admin*/
  {path: "update-company",  component: UpdateCompanyComponent},
  {path: "update-coupon", component: UpdateCouponComponent},
  {path: "update-customer", component: UpdateCustomerComponent},
  {path: "add-customer",component: AddCustomerComponent},
  {path: "add-company", component: AddCompanyComponent},
  {path: "ad-comp", component: AdCompComponent},
  {path: "ad-coup", component: AdCoupComponent},
  {path: "customer", component:CustomerComponent},


/*Company*/
  
{path: "com-add-coupon", component: ComAddCouponComponent},
{path: "com-update-company", component: ComUpdateCompanyComponent},
{path: "com-update-coupon", component: ComUpdateCouponComponent},
{path: "comp-coup", component: CompCoupComponent},

/*Customer*/

{path: "coupons-title", component:CouponsTitleComponent},
{path: "coupons-desc", component:CouponsDescComponent},
{path: "coupons-price", component:CouponsPriceComponent},
{path: "update-user", component:UpdateUserComponent},
{path: "cus-update-customer", component:CusUpdateCustomerComponent},
  

  {path: "", redirectTo: "/home" , pathMatch: "full"},
  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
