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
  public contatoS: Contato;
  public contatos: Contato[] = [];
  public nome = '';
  public telefone = '';
  public celular = '';
  public endereco = '';
  public email = '';
  public flag = true;

  constructor(private contatoService: ContatoService, private modalService: BsModalService) { }

  public modalRef: BsModalRef;


  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.carregaTodos();
  }
  public salvarContato(): void {

    if(this.flag){
      const contato = new Contato();
      contato.nome = this.nome;
      contato.telefone = this.telefone;
      contato.celular = this.celular;
      contato.endereco = this.endereco;
      contato.email = this.email;
      this.contatoService.addContato(contato)
        .subscribe(res => {
          this.carregaTodos();
          this.nome = '';
          this.telefone = '';
          this.celular = '';
          this.endereco = '';
          this.email = '';
        },
        err => {
          console.log(err);
        });
    }else {
      this.contatoS.nome = this.nome;
      this.contatoS.telefone = this.telefone;
      this.contatoS.celular = this.celular;
      this.contatoS.endereco = this.endereco;
      this.contatoS.email = this.email;
        this.flag = true;
          this.contatoService.updateContato(this.contatoS)
          .subscribe(res => {
            this.contatos = res;
            this.nome = '';
            this.telefone = '';
            this.celular = '';
            this.endereco = '';
            this.email = '';
            this.carregaTodos();
          },
          err => {
            console.log(err);
          });
      }

  }

  public apagarContato(id: number): void {
    this.contatoService.removeContato(id)
      .subscribe(res => {
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
      },
      err => {
        console.log(err);
      });
  }
  public updateContato(contato: Contato): void {
    this.contatoS = contato;
    this.nome = contato.nome;
    this.telefone = contato.telefone;
    this.celular = contato.celular;
    this.endereco = contato.endereco;
    this.email = contato.email;
    this.flag =false;
  }

}
