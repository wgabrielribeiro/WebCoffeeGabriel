import { ProdSelecionado } from './../../model/ProdSelecionado';
import { Router } from '@angular/router';
import { MetodoPagamento } from './../../model/MetodoPagamento';
import { PagamentoService } from './../../service/Pagamento.service';
import { Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { ProdutosService } from 'src/app/service/Produtos.service';
import { ProdutosComprados } from 'src/app/model/ProdutosComprados';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(private autenticaService: AutenticaService, private produtosService: ProdutosService, private alertService: AlertService,
    private formBuilder: FormBuilder, private pagamento: PagamentoService, private router: Router) { }

  formPagamento!: FormGroup;
  public userName = this.autenticaService.getCurrentUser()?.replace('"', '');
  public calculo?: any;
  public carrinhoVazio: boolean = false;
  public validacao: boolean = false;

  ngOnInit() {
    this.fnLoadTotal();

    if (this.validacao == true) {
      this.fnValidarCartaoCredito();
    }
    else{
      this.fnValidarDnheiro();
    }

  }

  fnLoadTotal() {
    this.produtosService.obterCalculo(this.userName)
      .subscribe({
        next: (calculo: any) => {
          //debugger
          this.calculo = calculo;
          this.carrinhoVazio = true;
        },
        error: (erro: any) => {
          //debugger
          if (erro.status = 404) {
            this.carrinhoVazio = false;
          }
          else {
            this.alertService.showAlert("Erro ao calcular preço total!", 'danger', 3000);
          }
        }
      })
  }

  fnValidarCartaoCredito() {
    this.formPagamento = this.formBuilder.group({
      nmCartao: ['', [Validators.required]],
      numeroCartao: ['', [Validators.required]],
      validade: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      parcelamento: ['', [Validators.required]],
      qntTroco: [''],
      isDinheiro: ['']
    })
  }

  fnValidarDnheiro() {
    this.formPagamento = this.formBuilder.group({
      nmCartao: [''],
      numeroCartao: [''],
      validade: [''],
      cvv: [''],
      parcelamento: [''],
      qntTroco: [''],
      isDinheiro: ['']
    })
  }

  fnValidacoes(tipo: boolean){
    if(tipo == true){
      this.validacao = true;
    }
    else{
      this.validacao = false;
    }

    this.ngOnInit();

  }

  fnEnviar() {
    debugger
    var dados = this.formPagamento.getRawValue() as MetodoPagamento

    dados.usuario = this.userName;

    if (dados.numeroCartao?.toString() == "") {
      dados.numeroCartao = 1;
      dados.cvv = 0;
      dados.isDinheiro = true;
    }
    else {
      dados.qntTroco = 0;
      dados.isDinheiro = false;
    }

    this.pagamento.fnMetodoPagamento(dados)
      .subscribe({
        next: (dados: any) => {
          //debugger
          this.alertService.showAlert("Pagamento efetuado com sucesso!", 'success', 3000);
        },
        error: (erro: any) => {
          //debugger
          if (erro.status == 200) {
            this.alertService.showAlert("Pagamento efetuado com sucesso!", 'success', 3000);
            this.fnHistoricoPedido();
          }
          else {
            this.router.navigate(['/pagamento']);
            this.alertService.showAlert("Erro ao efetuar pagamento!", 'danger', 3000);
          }
        }
      })
  }


  fnHistoricoPedido() {
    debugger
    var dados = this.autenticaService.obterProdutos();
    // dados = dados!.replace("[", "");
    // dados = dados!.replace("]", "");
    // dados = dados!.substring(1, dados.length - 1)
    var obj = JSON.parse(dados!);

    this.pagamento.fnApagarHistorico(obj)
    .subscribe({
      next: (response: any) => {
        debugger
      },
      error: (erro: any) =>{
        debugger
      }
    })

  }

}
