import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchPipe } from './pipes/search.pipe';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillsComponent } from './view-bills/view-bills.component';
import { EditProdutsComponent } from './edit-produts/edit-produts.component'
import { FormsModule } from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ManageProductComponent,
    AddProductComponent,
    SearchPipe,
    ManageOrderComponent,
    ViewBillsComponent,
    EditProdutsComponent,
    ViewProductComponent,
    ViewCategoryComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule ,
   HttpClientModule,
   FormsModule
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
