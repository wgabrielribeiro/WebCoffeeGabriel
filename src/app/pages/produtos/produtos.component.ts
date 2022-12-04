import { CarrinhoComponent } from './../carrinho/carrinho.component';
import { Router } from '@angular/router';
import { ThemeService } from './../../service/theme.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/model/Produtos';
import { AlertService } from 'src/app/service/alert.service';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { ProdutosService } from 'src/app/service/Produtos.service';
import { toInt } from 'ngx-bootstrap/chronos/utils/type-checks';
import { NgIfContext } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdSelecionado } from 'src/app/model/ProdSelecionado';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private autenticaService: AutenticaService, private produtosService: ProdutosService, private alertService: AlertService, private router: Router,
    private formBuilder: FormBuilder) { }

  isCollapsed = true;

  ProdutosForm!: FormGroup;

  public userName = this.autenticaService.getCurrentUser()?.replace('"', '');

  public ListaProdutosQuente?: Produtos[] = [];
  public ListaProdutosFrio?: Produtos[] = [];


  public lista: Produtos = new Produtos();
  public cart?: Produtos[] = [];
  public count?: any[] = [];

  public contemProdutoQuente: boolean = true;
  public contemProdutoFrio: boolean = true;

  public validaCarrinho: boolean = false;

  ngOnInit() {

    this.ProdutosForm = this.formBuilder.group({
      cod_Produto: [''],
      preco: [''],
      nm_Produto: [''],
      nm_Imagem: ['']
    })

    this.fnLoad();

  }

  fnLoad() {

    //load da tela produtos
    this.produtosService.retornaProdutosQuente()
      .subscribe({
        next: (produtos: Produtos[]) => {
          //debugger
          if (produtos.length == 0) {
            this.contemProdutoQuente = false;
          }
          else {
            this.ListaProdutosQuente = produtos;
            this.contemProdutoQuente = true;
          }

        },
        error: (erro: any) => {
          //debugger
          this.contemProdutoQuente = false;
          if (erro.status != 404) {
            this.alertService.showAlert("Erro ao carregar Produtos!", 'danger', 3000);
          }
        }
      })


    this.produtosService.retornaProdutosFrio()
      .subscribe({
        next: (produtos: Produtos[]) => {
          //debugger
          if (produtos.length == 0) {
            this.contemProdutoFrio = false;
          }
          else {
            this.ListaProdutosFrio = produtos;
            this.contemProdutoFrio = true;
          }

        },
        error: (erro: any) => {
          //debugger
          this.contemProdutoFrio = false;
          if (erro.status != 404) {
            this.alertService.showAlert("Erro ao carregar Produtos!", 'danger', 3000);
          }
        }
      })

    //obtem a qnt de selecionado
    this.produtosService.ObterProdSelecionadoQuente(this.userName)
      .subscribe({
        next: (response: any) => {
          //debugger;
          if (response.length == 0) {
            this.validaCarrinho = false;
          }
          else {
            //this.ListaProdutosQuente = response;
            this.validaCarrinho = true;
          }
        },
        error: (erro: any) => {
          //debugger;
          this.validaCarrinho = false;
        }

      })

    this.produtosService.ObterProdSelecionadoFrio(this.userName)
      .subscribe({
        next: (response: any) => {
          //debugger;
          if (response.length == 0) {
            this.validaCarrinho = false;
          }
          else {
            this.ListaProdutosFrio = response;
            this.validaCarrinho = true;
          }
        },
        error: (erro: any) => {
          //debugger;
          this.validaCarrinho = false;
        }

      })
  }



  fnCarrinho(obj: ProdSelecionado) {
    //debugger
    obj.usuario = this.userName;
    obj.selecionado = true

    this.produtosService.adicionaCarrinho(obj).subscribe({
      next: (carrinhoProduto: any) => {
        //debugger
        this.validaCarrinho = true;
        this.alertService.showAlert("Produto adicionado ao carrinho!", 'success', 3000);
        //this.ngOnInit();
      },
      error: (erro: any) => {
        //debugger
        if (erro.status != 200) {
          this.alertService.showAlert("Erro ao adicionar produto ao carrinho!", 'danger', 3000);
        }
        else {
          this.validaCarrinho = true;
          this.alertService.showAlert("Produto adicionado ao carrinho!", 'success', 3000);
          // this.ngOnInit();
        }

      }
    })


    //this.router.navigate(["/carrinho"]);
  }


}
