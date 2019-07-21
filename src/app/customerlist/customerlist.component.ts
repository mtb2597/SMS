import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { SmsservicesService } from '../smsservices.service';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  x:string;
  MyDataSource: any;
  displayedColumns = ['Customer Name', 'Address','City','Phone No','Outstanding Amt'];
  constructor(private ser :SmsservicesService) { }

  ngOnInit() {
    this.RenderDataTable();
  }
  RenderDataTable() {
    this.ser.ajaxcall7(this.x)
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
  clear(city: any)
  {
    city.value = "";
  }
 /* SearchCustomer(city:string)
  {
      this.ser.ajaxcall8(city)
        .subscribe(
        res => {
          this.MyDataSource = new MatTableDataSource();
          this.MyDataSource.data = res;
          console.log(this.MyDataSource.data);
        },
        error => {
          console.log('There was an error while retrieving Posts !!!' + error);
        });
      
    }*/
  }

