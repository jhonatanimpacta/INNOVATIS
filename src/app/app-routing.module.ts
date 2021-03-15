import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './pages/login/login.component';
import { movimentacaoComponent } from './pages/movimentacao/movimentacao.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { FornecedorComponent } from './pages/fornecedor/fornecedor.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent,
  },
  
  {
    path: "movimentacoes",
    component: movimentacaoComponent,
  },

  {
    path: "categorias",
    component: CategoriaComponent,
  },

  {
    path: "produtos",
    component: ProdutoComponent,
  },

  {
    path: "fornecedores",
    component: FornecedorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
