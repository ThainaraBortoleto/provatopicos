import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import { provaservice } from '../../app/provaservice'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  provaservice: any;
  

  constructor(public navCtrl: NavController) {
      
  }

 

  onAddClick (){
    this.navCtrl.push('MensagemPage');
  }

}
