import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
 
import { LoginComponent } from './pages/login/login.component';
import { OrdemProdutosComponent } from './pages/ordem-produtos/ordem-produtos.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  
  {
    path: "ordem-produtos",
    component: OrdemProdutosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
