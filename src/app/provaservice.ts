
import {AngularFireDatabase} from 'angularfire2/database'
import { Injectable } from "@angular/core";

@Injectable()
export class provaservice{
    constructor (private db: AngularFireDatabase){
    }

    addMensagem (mensagem){
        this.db.list("/mensagem/").push({
        title: mensagem.title,
        content: mensagem.content
      
        });
    }

    fetchNotes (){
        return this.db.list ("/mensagem/");
    }

}