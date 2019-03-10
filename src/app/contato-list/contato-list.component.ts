import { ContatoService } from './../services/contato.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contato } from '../models/contato.model';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  @Input() contatos: Contato[];
  @Output() editContato = new EventEmitter();
  @Output() deleteContato = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  edit(contato:Contato){
    this.editContato.emit(contato)
  }

  delete(contato:Contato){
    this.deleteContato.emit(contato)
  }
  



}
