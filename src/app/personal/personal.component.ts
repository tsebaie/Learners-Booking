import { Component, OnInit } from '@angular/core';
import login from '../array.component';
import { race } from 'q';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Submitfunc(fname, lname, IdNo, race, Gender, Nationailty, Language, StreetAdress, Province, PostalCode, Code, TelephoneNo,EmailAddress) {

    //fname=login.push(fname) ;
    // lname=login.push(lname) ;
    // IdNo=login.push(IdNo);
    login[0] = fname;
    login[1] = lname;
    login[2] = IdNo;
    login[3] = race;
    login[4] = Gender;
    login[5] = Nationailty;
    login[6] = Language;
    login[7] = StreetAdress;
    login[8] = Province;
    login[9] = PostalCode;
    login[10] = Code;
    login[11] = TelephoneNo;
    login[12] = EmailAddress;
    alert(fname);
    // Race=login.push(Race) ;
    // Gender=login.push(Gender) ;
    // Nationality=login.push(Nationality);
    //  Language=login.push(Language) ;
    //StreetAdress=login.push(StreetAdress) ;
    //Province=login.push(Province);
    // PostalCode=login.push(PostalCode);
    // Code=login.push(Code) ;
    // TelephoneNo=login.push(TelephoneNo) ;
    //  EmailAddress=login.push(EmailAddress);


    console.log(login);
  }

}
