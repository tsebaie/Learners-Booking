import { Component, OnInit } from '@angular/core';

import login from '../array.component' ;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Loginfunc(Username,psw) {

    Username=login.push(Username) ;
    psw=login.push(psw) ;
    console.log(login) ;
  }
 
 /// Lebo(Username,psw){
 
 // Username=Lebo.push(Username);
 // psw=Lebo.push(psw);

  //console.log(Lebo);
  //}






}
