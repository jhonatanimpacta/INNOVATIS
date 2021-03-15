import { Component, OnInit } from '@angular/core';
import { CrudFornecedores } from '../../api-json/api-fornecedores';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {
  teste: any;
  erro: any;

  constructor(private CrudFornecedores: CrudFornecedores) {
    this.getter();
  }

  ngOnInit() {
  }

  getter() {

    this.CrudFornecedores.getProdutos().subscribe(
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
