import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import { provaservice } from '../../app/provaservice'

/**
 * Generated class for the MensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html',
})
export default class MensagemPage {
  mensagem;
  provaservice: any;
  newmensagemflag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, db:
    AngularFireDatabase) {
      console.log(db);

      if(!this.mensagem){
        this.mensagem = {
          id: "",
          nome: "",
          content: ""
           
        };
        this.newmensagemflag = true;
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
  }

   ionViewWillLeave(){
    if(this.newmensagemflag)
      this.provaservice.addMensagem(this.mensagem);
   }

   //ngOnInit (){
    //this.mensagem = this.provaservice.fetchNotes();
   // }

}
