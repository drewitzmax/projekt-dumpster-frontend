import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserSignUpComponent } from './sign-up/user-sign-up/user-sign-up.component';
import { SupplierSignUpComponent } from './sign-up/supplier-sign-up/supplier-sign-up.component';
import { LoginComponent } from './login/login.component';
import { PlaceOfferComponent } from './offers/place-offer/place-offer.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {NotLoggedInGuardGuard} from './guards/not-logged-in-guard.guard';
import {IsProviderGuard} from './guards/is-provider.guard';


const routes: Routes = [
  {path: '', component: SuppliersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SignUpComponent, canActivate: [NotLoggedInGuardGuard], children: [{path: 'user', component: UserSignUpComponent}, {path: 'supplier', component: SupplierSignUpComponent}]},
  {path: 'login', component: LoginComponent},
  {path: 'placeOffer', canActivate: [IsProviderGuard], component: PlaceOfferComponent},
  {path: 'impressum', component: ImpressumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
