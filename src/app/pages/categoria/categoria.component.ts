import { Component, OnInit } from '@angular/core';
import { CrudCategorias } from '../../api-json/api-categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  teste: any;
  erro: any;

  constructor(private CrudCategorias: CrudCategorias) {
    this.getter();
  }

  ngOnInit() {
  }

  getter() {

    this.CrudCategorias.getProdutos().subscribe(
      (data) => {
        this.teste = data;
        this.teste = this.teste.contents;
        console.log(this.teste)
      },
      (error: any) => {
        this.erro = error;
        console.error('Error: ', error);
      }
    );

  }
}
