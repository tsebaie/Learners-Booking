import { Component, OnInit } from '@angular/core';


import login from '../array.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  fname = login[0];
  lname = login[1];
  IdNo = login[2];
  Race = login[3];
  Gender = login[4];
  Nationality = login[5];
  Language = login[6];
  StreetAdress = login[7];
  Province = login[8];
  PostalCode = login[9];
  Code = login[10];
  TelephoneNo = login[11];
  EmailAddress = login[12];
  
}
