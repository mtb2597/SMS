import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { SmsservicesService } from '../smsservices.service';
import { delay } from 'q';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
qty:any;
var:any;
x:string;
show:any;
count : number;
MyDataSource: any;
displayedColumns = ['Product Id', 'Product Name','Price'];

  constructor(private router:Router,private ser :SmsservicesService) { 
  }

  ngOnInit() {
    this.RenderDataTable();
  }
  RenderDataTable() {
    this.ser.ajaxcall6(this.x)
      .subscribe(
      res => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = res;
        console.log(this.MyDataSource.data);
        this.count = Object.keys(res).length;
      },
      error => {
        console.log('There was an error while retrieving Posts !!!' + error);
        
      });
  }
  addtocart(qty:number)
  {

      this.ser.ajaxcall10(qty).subscribe( (data)=> { console.log("Inserted", data); });
      //this.ser.ajaxcall1(x).subscribe( (data)=> { console.log(data); this.y = data; this.result = JSON.stringify(this.y) });
     // console.log(this.result);
      this.router.navigate(['Invoice']);
  }
  Calculate(quant:number)
  {
    this.ser.ajaxcall11(quant).subscribe( (data)=> { console.log("Inserted", data); });
  }
  
  reset(qty:any,quant:any)
  {
    qty.value = "";
    quant.value = "";
  }
  reset1()
  {
    this.show = "";
  }
check(qty:number)
{
  if(qty>this.count)
  {
    console.log(this.count);
    this.show = "Please Enter A Valid Product Id";
  }
  else
  {
    this.addtocart(qty);
  }
}
}
