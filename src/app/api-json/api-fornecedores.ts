import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudFornecedores {
  constructor(private http: HttpClient) { }
  public getProdutos(): Observable<any> {
    return this.http.get(`./assets/fornecedores.json`);
  }
}
