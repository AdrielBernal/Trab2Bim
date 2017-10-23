import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contato } from './contato';

@Injectable()
export class ContatoService {

  private contatoURL = 'http://localhost:4200/api/contatos';

  constructor(private http: Http) { }

  public addContato(body: Object): Observable<Contato[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.contatoURL, body, options)
      .map((res: Response) => res.json());
  }

  public updateCotnato(body: Object): Observable<Contato[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.contatoURL}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeContato(id: number): Observable<Contato[]> {
    return this.http.delete(`${this.contatoURL}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadContatos(): Observable<Contato[]> {
    return this.http.get(`${this.contatoURL}`)
      .map((res: Response) => res.json());
  }

}
