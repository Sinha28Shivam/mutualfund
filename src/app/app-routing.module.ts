import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WalletComponent } from './components/wallet/wallet.component';

import { HomepageComponent } from './components/homepage/homepage.component';

import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InvestNowComponent } from './components/invest-now/invest-now.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyingComponent } from './components/buying/buying.component';
import { SipComponent } from './components/sip/sip.component';
import { AllfundsdetailComponent } from './components/allfundsdetail/allfundsdetail.component';
import { AllfundsComponent } from './components/allfunds/allfunds.component';
import { WishlistPageComponent } from './components/wishlist/wishlist-page/wishlist-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MutualFundDetailsComponent } from './components/mutual-fund-details/mutual-fund-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { AuthGuard } from './services/auth.guard';
import { PaymentoptionComponent } from './components/paymentoption/paymentoption.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SendOtpComponent } from './components/send-otp/send-otp.component';
import { VarifyotpComponent } from './components/varifyotp/varifyotp.component';
// import { combineLatest } from 'rxjs';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'dashboard', component: DashboardHomeComponent,canActivate:[AuthGuard]},
  {path: 'dashboard/wallet', component: WalletComponent,canActivate:[AuthGuard]},
  {path: 'portfolio', component: PortfolioComponent,canActivate:[AuthGuard]},
  {path: 'investNow', component: InvestNowComponent,canActivate:[AuthGuard]},
  {path: 'account-details', component: AccountDetailsComponent,canActivate:[AuthGuard]},
  {path: 'navbar', component: NavbarComponent},
  {path:'dashboard/allfundsdetail/:id/sip',component:SipComponent,canActivate:[AuthGuard]},
  {path:'dashboard/allfundsdetail/:id/buying', component:BuyingComponent,canActivate:[AuthGuard]},
  {path:'allfundsdetail/:schemaId',component:AllfundsdetailComponent},
  {path:'dashboard/allfundsdetail/:id',component:AllfundsdetailComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'dashboard/investnow', component: InvestNowComponent},
  {path: 'dashboard/portfolio', component: PortfolioComponent},
  {path: 'dashboard/account-details', component: AccountDetailsComponent},
  {path:'homepage/mutual-funds/:schemaId',component:MutualFundDetailsComponent},
  {path:'dashboard/allfundsdetail/:id/wishlist/wishlist-page',component:WishlistPageComponent,canActivate:[AuthGuard]},
  {path:"dashboard/allfundsdetail/:schemaId",component:AllfundsdetailComponent},
  {path:'paymentoption',component:PaymentoptionComponent},
  {path:'wishlist',component:WishlistPageComponent},
  {path:'register/account',component:RegisterComponent},
  {path:'thankyou',component:ThankyouComponent},
  // {path:'sendOtp',component:ForgotpasswordComponent},
  // {path:'update',component:SendOtpComponent},
  // {path:'varifyotp',component:VarifyotpComponent},
  {path: '**', pathMatch: 'full', component: ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
