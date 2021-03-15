import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { movimentacaoComponent } from './pages/movimentacao/movimentacao.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { FornecedorComponent } from './pages/fornecedor/fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    PerfilComponent,
    movimentacaoComponent,
    LoginComponent,
    CategoriaComponent,
    ProdutoComponent,
    FornecedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
