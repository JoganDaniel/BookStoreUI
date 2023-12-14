import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import  {HomeComponent} from './Component/home/home.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { DisplaybookComponent } from './Component/displaybook/displaybook.component';
import { ViewbookComponent } from './Component/viewbook/viewbook.component';
import { CartComponent } from './Component/cart/cart.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { OrderComponent } from './Component/order/order.component';
import { CustomerComponent } from './Component/customer/customer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path:'home',component:HomeComponent},
  {
    path: 'book',
    component: DashboardComponent,
    children: [
      {
        path: 'displaybook',
        component: DisplaybookComponent,
      },
      {
        path: 'viewbook',
        component: ViewbookComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'customer',
        component: CustomerComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
