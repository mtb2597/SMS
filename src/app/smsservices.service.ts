import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
import { UserLogin } from './user-login';
import { Customer } from './customer';
import { Sales } from './sales';
import { Invoice } from './invoice';
const httpOptions = {
  headers: new HttpHeaders({ 'ContentType': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class SmsservicesService {

  constructor(private mac :HttpClient) { }
  ajaxcall(x :Product) 
  {
    let urilink="http://localhost:8080/insert";
      let body = JSON.stringify(x);            
      let headers = new Headers({ 'Content-Type': 'application/json' });
      console.log(body);
     
      return  this.mac.post(urilink,body);
  }
  ajaxcall1(x :UserLogin) :Observable<UserLogin>
  {
    let urilink="http://localhost:8080/customer_login";
      let body = JSON.stringify(x);            
      let headers = new Headers({ 'Content-Type': 'application/json' });
      return  this.mac.post<UserLogin>(urilink,body);
  }
 ajaxcall2(x :number) :Observable<Product>
  {
      let urilink="http://localhost:8080/product_select?y="+x;
      return  this.mac.get<Product>(urilink);
  }
  ajaxcall3(x: Product) 
  {
      let urilink="http://localhost:8080/product_update";
      let body = JSON.stringify(x);            
      let headers = new Headers({ 'Content-Type': 'application/json' });
      console.log(body);
      return  this.mac.post(urilink,body);
  }
  ajaxcall4(x: number) :Observable<Product>
  {
      let urilink="http://localhost:8080/product_delete?y="+x;
      //let body = JSON.stringify(x);            
      console.log(x);
      return  this.mac.delete<Product>(urilink);
  }
  ajaxcall5(x: string) :Observable<Product>
  {
    let urilink="http://localhost:8080/product_mselect?y="+x;
    //let body = JSON.stringify(x);            
    //console.log(x);
    return  this.mac.get<Product>(urilink);
  }
  ajaxcall6(x: string) :Observable<Product>
  {
    let urilink="http://localhost:8080/product_mselect?y="+x;
    //let body = JSON.stringify(x);            
    //console.log(x);
    return  this.mac.get<Product>(urilink);
  }
  ajaxcall7(x: string) :Observable<Customer>
  {
    let urilink="http://localhost:8080/customer_mselect?y="+x;
    //let body = JSON.stringify(x);            
    //console.log(x);
    return  this.mac.get<Customer>(urilink);
  }
  ajaxcall9(x: string) :Observable<Sales>
  {
    let urilink="http://localhost:8080/sales_mselect?y="+x;
    //let body = JSON.stringify(x);            
    //console.log(x);
    return  this.mac.get<Sales>(urilink);
  }
  ajaxcall10(x :number) 
  {
    let urilink="http://localhost:8080/invoice_select?y="+x;     
      return  this.mac.get(urilink);
  }
  ajaxcall11(x :number) 
  {
    let urilink="http://localhost:8080/invoice_qtystore?y="+x;     
      return  this.mac.get(urilink);
  }
  ajaxcall12(x :string) :Observable<Invoice>
  {
      let urilink="http://localhost:8080/invoice_display?y="+x;
      return  this.mac.get<Invoice>(urilink);
  }
 /* ajaxcall8(x: string) :Observable<Customer>
  {
    let urilink="http://localhost:8080/city_mselect?y="+x;
    //let body = JSON.stringify(x);            
    //console.log(x);
    return  this.mac.get<Customer>(urilink);
  }*/
}