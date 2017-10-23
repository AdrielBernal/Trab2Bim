import { Component, OnInit } from '@angular/core';
import { ContatoService } from './contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  public contatos: Contato[] = [];
  public nome = '';

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
  }
  public salvarContato(): void {
    console.log('oi');

    const contato = new Contato();
    contato.nome = this.nome;

    this.contatoService.addContato(contato)
      .subscribe(res => {
        console.log(res);
        this.carregaTodos();
      },
      err => {
        console.log(err);
      });

  }

  public apagarAluno(id: number): void {
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
