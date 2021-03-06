import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './products/product/product.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { CinemaComponent } from './cinema/cinema.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent,
    EditproductComponent,
    LoginComponent,
    ShopComponent,
    CinemaComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
