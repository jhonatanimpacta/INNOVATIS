import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class crudMovimentacoes {
  constructor(private http: HttpClient) { }
  public getProdutos(): Observable<any> {
    return this.http.get(`http://developerweb.com.br/movimentacoes.json`);
  }
}
