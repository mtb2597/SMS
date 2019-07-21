import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminfirstscreenComponent } from './adminfirstscreen/adminfirstscreen.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SalesComponent } from './sales/sales.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component'
const routes: Routes = [
{path:'',component:LoginComponent},
{path:'adminfirstscreen',component:AdminfirstscreenComponent},
{path:'customerlist',component:CustomerlistComponent},
{path:'productlist',component: ProductlistComponent},
{path:'sales',component:SalesComponent},
{path:'viewproduct',component: ViewproductComponent},
{path:'customer',component: CustomerComponent},
{path:'Invoice',component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
