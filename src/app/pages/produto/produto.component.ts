import { Component, OnInit } from '@angular/core';
import { CrudProdutos } from '../../api-json/api-produtos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  teste: any;
  erro: any;

  constructor(private CrudProdutos: CrudProdutos) {
    this.getter();
  }

  ngOnInit() {
  }

  getter() {

    this.CrudProdutos.getProdutos().subscribe(
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
