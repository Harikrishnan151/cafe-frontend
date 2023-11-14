import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillsComponent } from './view-bills/view-bills.component';
import { EditProdutsComponent } from './edit-produts/edit-produts.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
   path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
   path:'manageproduct',component:ManageProductComponent
  },
  {
  path:'addproduct',component:AddProductComponent
  },
  {
    path:'manageorder',component:ManageOrderComponent
  },
  {
   path:'viewbills',component:ViewBillsComponent
  },
  {
   path:'editproductdetails/:id',component:EditProdutsComponent
  },
  {
    path:'viewProduct',component:ViewProductComponent
  },
  {
    path:'viewCategories',component:ViewCategoryComponent
  },
  {
    path:'deleteAccount/:username',component: DeleteAccountComponent
  },
  {
   path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
