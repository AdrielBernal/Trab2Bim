import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContatoService } from './contato.service';
import { Contato } from './contato';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public contatos: Contato[] = [];
  public nome = '';
  public telefone = '';
  public celular = '';
  public endereco = '';
  public email = '';

  constructor(private contatoService: ContatoService, private modalService: BsModalService) { }

  public modalRef: BsModalRef;


  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.carregaTodos();
  }
  public salvarContato(): void {
    console.log('oi');

    const contato = new Contato();
    contato.nome = this.nome;
    contato.telefone = this.telefone;
    contato.celular = this.celular;
    contato.endereco = this.endereco;
    contato.email = this.email;

    this.contatoService.addContato(contato)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });

  }

  public apagarContato(id: number): void {
    this.contatoService.removeContato(id)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });
  }

  public carregaTodos(): void {
    this.contatoService.loadContatos()
      .subscribe(res => {
        this.contatos = res;
        console.log('foi');
      },
      err => {
        console.log(err);
      });
  }

}
