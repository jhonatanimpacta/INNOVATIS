import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-ordem-produtos',
  templateUrl: './ordem-produtos.component.html',
  styleUrls: ['./ordem-produtos.component.scss']
})

export class OrdemProdutosComponent implements OnInit {
  teste: any;
  erro: any;

  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit() {
  }

  getter() {

    this.crudService.getProdutos().subscribe(
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
