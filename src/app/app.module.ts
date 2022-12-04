import { AuthGuardService } from './service/auth-guard.service';
import { LoginService } from './service/login.service';
import { FechamentoPedidoComponent } from './pages/fechamentoPedido/fechamentoPedido.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { SharedModule } from './pages/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ThemeComponent } from './theme/theme.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NavComponent } from './pages/nav/nav.component';
import { NavMenuComponent } from './pages/navMenu/navMenu.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AboutComponent } from './pages/about/about.component';
import { RedefinirSenhaComponent } from './pages/redefinirSenha/redefinirSenha.component';
import { FunctionsShared } from './shared/functionsShared';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DadosCadastraisModel } from './model/DadosCadastraisModel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    NavComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    ProdutosComponent,
    ThemeComponent,
    ServicosComponent,
    AboutComponent,
    ContatoComponent,
    RedefinirSenhaComponent,
    FunctionsShared,
    PerfilComponent,
    CarrinhoComponent,
    PagamentoComponent,
    FechamentoPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AlertModule,
    ModalModule.forRoot(),
    SharedModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [LoginComponent, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
