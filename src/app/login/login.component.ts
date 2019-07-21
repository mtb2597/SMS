import { Component, OnInit ,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { SmsservicesService } from '../smsservices.service';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// password:string;
loginname:string;
loginpass:string;
  uname:string;
  pword:string;
  cname:string;
  pw:string;
  y:UserLogin;
  defaultname:any;
  defaultpassword:any;
  constructor(private router:Router,private ser :SmsservicesService) { 
    this.uname="ADMIN"
    this.pword="@123abc"
    this.defaultname = "";
    this.defaultpassword = "";
  }

  ngOnInit() {
  }

  clear(name: any,password: any)
  {
    name.value = "";
    password.value = "";
    this.loginname = "";
    this.loginpass = "";
  }
  submit(name:string,password:string)
  {
        if(name == this.uname && password == this.pword)
        {
            this.router.navigate(['adminfirstscreen']);
        }
        else if(name == "")
        {
          this.loginname = "Username Cannot Be Empty";
          this.clear(name,password);
        }
        else if(password == "")
        {
          this.loginpass = "Password Cannot be Empty";
          this.clear(name,password);
        }
        else
        {
          this.loginname = "Invalid Username Or Password";
          this.clear(name,password);
        }
  }   
  customersubmit(name:string,password:string)
  {
    if(name == "")
   {
    this.loginname = "Username Cannot Be Empty";
    this.clear(name,password);
   }
    else if(password == "")
   {
    this.loginpass = "Password Cannot be Empty";
    this.clear(name,password);
    }
    else if(name !== "Binish Shams" && password !== "123")
    {
      this.loginname = "Invalid Username Or Password";
    }  
    let x = new UserLogin();
    this.y = new UserLogin();
    x.User_Name = name;
    x.Password = password;
    this.ser.ajaxcall1(x).subscribe( (data)=> { this.y = data; this.cname = this.y.User_Name; this.pw = this.y.Password;  
   if(name == this.cname && password == this.pw)
   {
     this.router.navigate(['customer']);
   }

   
  });
  }

  
   
    
  

}
