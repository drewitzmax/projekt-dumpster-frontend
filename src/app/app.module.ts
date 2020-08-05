import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SuppliersComponent,
    NavbarComponent,
    AboutComponent,
    SuppliersListComponent,
    SuppliersItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [SuppliersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
