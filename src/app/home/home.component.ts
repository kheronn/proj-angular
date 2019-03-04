import { NgForm } from '@angular/forms';
import { ContatoService } from './../services/contato.service';
import { Contato } from './../models/contato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  contato: Contato;
  contatos: Contato[];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contato = new Contato();
    this.contatos = this.contatoService.getAll()

  }

  editContato(contato: Contato) {
    this.contato = contato;
  }

  deleteContato(contato: Contato) {
    this.contatoService.delete(contato)
    let removeIndex = this.contatos.map((item) => item.id).indexOf(contato.id)
    this.contatos.splice(removeIndex, 1)
  }

  saveContato(form: NgForm) {
    this.contato = form.value;
    this.contato.id = (this.contato.id) ? this.contato.id : new Date().getTime().toString();
    this.contatoService.save(this.contato);
    this.contatos.push(this.contato)
    this.contatos.reverse()
    form.resetForm();
  }




}
