import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular' ;
declare const connect_db: any;
declare const fireb_app: any;
declare const alert_field: any;

declare const fireb_data: any;
declare const sweet_alert: any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignINPage implements OnInit {
  

  constructor(public navCtrl: NavController) { }
  ngOnInit() {
  }
  goback(){this.navCtrl.back();}
  
  confirm(){
    fireb_app();
    fireb_data();
    sweet_alert(); 
    var u = <HTMLInputElement>document.getElementById("user");
    var p = <HTMLInputElement>document.getElementById("pwd");
    if(p.value=== ""||u.value=== ""){alert_field("please enter all the required fields!")}
    else{connect_db(u.value,p.value);}
   
    
    
    }
    gotoCAM(){ window.location.href = '/cam' }

  gotoSIGNUP(){window.location.href ='/sign-up' ;}
 
 
  pswd(){
  var x = <HTMLInputElement>document.getElementById("pwd");
  if (x.type == "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
 }
  
}