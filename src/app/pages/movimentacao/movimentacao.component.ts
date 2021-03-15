import { Component, OnInit } from '@angular/core';
import { crudMovimentacoes } from '../../api-json/api-movimentacoes';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})

export class movimentacaoComponent implements OnInit {
  teste: any;
  erro: any;

  constructor(private crudMovimentacoes: crudMovimentacoes) {
    this.getter();
  }

  ngOnInit() {
  }

  getter() {

    this.crudMovimentacoes.getProdutos().subscribe(
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
