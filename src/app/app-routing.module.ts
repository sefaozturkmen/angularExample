import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { EditproductComponent } from "./products/editproduct/editproduct.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductsComponent } from "./products/products.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: [
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: EditproductComponent },]
    },
    { path: 'users', component: UsersComponent, children:[
      { path: ':name', component: UserComponent },]},
    { path: '**', component: NotfoundComponent }
  ]

@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[
    RouterModule
]
})

export class AppRoutingModule{

}