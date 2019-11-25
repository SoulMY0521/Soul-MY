import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Userpassword="";
  Userspassword = ["Soul0521"];

  Show($Userpassword){
    if($Userpassword==this.Userspassword){
      window.alert("Login Sucessfully");
      window.location.href = '/home';
      
    }
    else{
      window.alert("Wrong Password");
    }
  }
}
