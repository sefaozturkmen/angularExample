import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent,
    UserComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
