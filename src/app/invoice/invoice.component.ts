import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { SmsservicesService } from '../smsservices.service';
import { delay } from 'q';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
x:string;
y:any;
pname:any;
qty:any;
price:any;
tot:any;
discount:any;
famt:any;
result:any;
  constructor(private router:Router,private ser :SmsservicesService) { 
    this.x = "";
  }

  ngOnInit() {
   // this.router.navigate(['Invoice']);
   this.SingleInvoice(this.pname,this.qty,this.price,this.tot,this.discount,this.famt);
  }

 SingleInvoice(pname: HTMLInputElement,qty: HTMLInputElement,price: HTMLInputElement,tot: HTMLInputElement,discount: HTMLInputElement,famt: HTMLInputElement) {
  this.sleep(50000);  
  this.ser.ajaxcall12(this.x).subscribe( (data)=> { this.y = data;     console.log(this.y);
    let i = new Invoice();
     i.Product_Id = this.y.product_Id;
     i.Product_Name = this.y.product_Name;
     i.Quantity = this.y.quantity;
     i.Price = this.y.price;
     i.Total_Bill = this.y.total_Bill;
     i.Discount_Offered = this.y.discount_Offered;
     i.Final_Amount = this.y.final_Amount;
     this.pname = i.Product_Name;
     this.qty = i.Quantity;
     this.price = i.Price;
     this.tot = i.Total_Bill;
     this.discount = i.Discount_Offered;
     this.famt = i.Final_Amount;
     this.result = "Thank You For Connecting With Us!!  Do Vist Again...";
});
}

sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
}
