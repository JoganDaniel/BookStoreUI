import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './Component/home/home.component';
import { DisplaybookComponent } from './Component/displaybook/displaybook.component';
import{DashboardComponent} from './Component/dashboard/dashboard.component';
import { ViewbookComponent } from './Component/viewbook/viewbook.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { CartComponent } from './Component/cart/cart.component';
import { OrderComponent } from './Component/order/order.component';
import { CustomerComponent } from './Component/customer/customer.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    HomeComponent,
    DisplaybookComponent,
    DashboardComponent,
    ViewbookComponent,
    WishlistComponent,
    CartComponent,
    OrderComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
