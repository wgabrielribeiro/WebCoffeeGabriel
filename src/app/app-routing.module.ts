import { FechamentoPedidoComponent } from './pages/fechamentoPedido/fechamentoPedido.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './pages/contato/contato.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { RedefinirSenhaComponent } from './pages/redefinirSenha/redefinirSenha.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'resetSenha', component: RedefinirSenhaComponent, canActivate: [AuthGuardService]},
  {path: 'produtos',component: ProdutosComponent, canActivate: [AuthGuardService]},
  {path: 'about',component: AboutComponent, canActivate: [AuthGuardService]},
  {path: 'servicos',component: ServicosComponent, canActivate: [AuthGuardService]},
  {path: 'contato',component: ContatoComponent, canActivate: [AuthGuardService]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardService]},
  {path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuardService]},
  {path: 'pagamento', component: PagamentoComponent, canActivate: [AuthGuardService]},
  {path: 'fechamento', component: FechamentoPedidoComponent, canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//{
//  path: "",
//  pathMatch: "full",
//  redirectTo: "login"
//},
//{
//  path: "login", component:LoginComponent
//}
