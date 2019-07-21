import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { SmsservicesService } from '../smsservices.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  x:string;
  MyDataSource: any;
  displayedColumns = ['Product Id', 'Product Name','Quantity Sold'];
  constructor(private ser :SmsservicesService) { }

  ngOnInit() {
    this.RenderDataTable();
  }
  RenderDataTable() {
    this.ser.ajaxcall9(this.x)
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
}
