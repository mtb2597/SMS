import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatTableDataSource,MatPaginatorModule,MatSortModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminfirstscreenComponent } from './adminfirstscreen/adminfirstscreen.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SalesComponent } from './sales/sales.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    //FormsModule,
    LoginComponent,
    AdminfirstscreenComponent,
    CustomerlistComponent,
    ProductlistComponent,
    SalesComponent,
    ViewproductComponent,
    CustomerComponent,
    InvoiceComponent
 

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule
  ],
  exports:[
    MatToolbarModule , MatMenuModule , MatInputModule , MatTableModule ,MatButtonModule,MatCardModule,MatPaginatorModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
