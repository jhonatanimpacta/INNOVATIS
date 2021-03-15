import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudCategorias {
  constructor(private http: HttpClient) { }
  public getProdutos(): Observable<any> {
    return this.http.get(`./assets/categoria.json`);
  }
}
