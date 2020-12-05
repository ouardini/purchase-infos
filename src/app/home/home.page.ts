import { Component } from '@angular/core';
import {  NavController } from '@ionic/angular' ;
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController , private menu:MenuController ) {this.menu.enable(false);}

  gotoSIGNIN(){this.navCtrl.navigateRoot('/sign-in') ;}

  
  
  
    
}
