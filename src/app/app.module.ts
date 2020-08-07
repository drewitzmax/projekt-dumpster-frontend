import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersItemComponent } from './suppliers/suppliers-list/suppliers-item/suppliers-item.component';
import { SuppliersService } from './suppliers/suppliers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserSignUpComponent } from './sign-up/user-sign-up/user-sign-up.component';
import { SupplierSignUpComponent } from './sign-up/supplier-sign-up/supplier-sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SuppliersComponent,
    NavbarComponent,
    AboutComponent,
    SuppliersListComponent,
    SuppliersItemComponent,
    SignUpComponent,
    UserSignUpComponent,
    SupplierSignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [SuppliersService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
