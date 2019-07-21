import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { SmsservicesService } from '../smsservices.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  x:string;
  MyDataSource: any;
  displayedColumns = ['Product Id', 'Product Name','Quantity','Price'];
  constructor(private ser :SmsservicesService) { }

  ngOnInit() {
    this.RenderDataTable();
  }
  RenderDataTable() {
    this.ser.ajaxcall5(this.x)
      .subscribe(
      res => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = res;
        console.log(this.MyDataSource.data);
      },
      error => {
        console.log('There was an error while retrieving Posts !!!' + error);
      });
  }
  DeleteProduct(pid:number) {
    this.ser.ajaxcall4(pid).subscribe( (data)=> { console.log("Inserted", data); });
    //this.ser.ajaxcall1(x).subscribe( (data)=> { console.log(data); this.y = data; this.result = JSON.stringify(this.y) });
}
clear(pid:any)
{
  pid.value = "";
}
}
