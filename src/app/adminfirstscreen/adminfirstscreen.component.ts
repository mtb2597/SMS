import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adminfirstscreen',
  templateUrl: './adminfirstscreen.component.html',
  styleUrls: ['./adminfirstscreen.component.css']
})
export class AdminfirstscreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
   route()
   {
    this.router.navigate(['login']);
   }
    viewcustomer()
    {
      this.router.navigate(['customerlist']);
    }
    addproduct()
    {
      this.router.navigate(['productlist']);
    }
    viewproduct()
    {
      this.router.navigate(['viewproduct'])
    }
    viewsales()
    {
      this.router.navigate(['sales']);
    }

}
