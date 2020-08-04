import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { RestaurantComponent } from './suppliers/restaurant/restaurant.component';
import { SupermarketComponent } from './suppliers/supermarket/supermarket.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SuppliersComponent,
    RestaurantComponent,
    SupermarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
