import { ProdutosComprados } from './../../model/ProdutosComprados';
import { ConsultaCEPService } from './../../service/consultaCEP.service';
import { DadosCadastraisService } from 'src/app/service/DadosCadastrais.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { AlertService } from 'src/app/service/alert.service';
import { CadastroService } from 'src/app/service/cadastro.service';
import { LoginService } from 'src/app/service/login.service';
import { DadosCadastraisModel } from '../../model/DadosCadastraisModel';
import { ValidatorDocumentService } from 'src/app/service/validatorDocument.service';
import { PagamentoService } from 'src/app/service/Pagamento.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  formCad!: FormGroup;

  constructor(private autenticaService: AutenticaService, private obterToken: LoginService, private dadosCadastraisService: DadosCadastraisService, private validatorDocument: ValidatorDocumentService,
    private consultaCEPService: ConsultaCEPService, private alertService: AlertService, private cadastroDadosService: CadastroService, private formBuilder: FormBuilder,
    private pagamento: PagamentoService) { }

  public email?: string;
  public userName = this.autenticaService.getCurrentUser();
  public nome?: string;
  public documento?: string;
  public dataNasc?: string;
  public telefone?: string;
  public rua?: string;
  public numero?: string;
  public cep?: string;
  public complemento?: string;
  public bairro?: string;
  public cidade?: string;
  public estado?: string;
  public pais?: string;

  public listPedido: ProdutosComprados[] = [];
  public pedidoVazio: boolean = true;
  condicaoCad: boolean = false;

  ngOnInit() {

    this.formCad = this.formBuilder.group({
      Nome: ['', [Validators.required]],
      Dt_Nascimento: ['', [Validators.required]],
      DOCUMENTO: ['', [Validators.required]],
      TELEFONE: ['', [Validators.required]],
      RUA: ['', [Validators.required]],
      NUMERO: ['', [Validators.required]],
      CEP: ['', [Validators.required]],
      COMPLEMENTO: [''],
      BAIRRO: [''],
      CIDADE: [''],
      ESTADO: [''],
      PAIS: ['']
    })

    this.fnObterEmail();

    this.validaFormulario();

    this.fnLoadDados();

    this.fnCarregaPedidos();
  }

  get DOCUMENTO() {
    let cpf = this.formCad.get('DOCUMENTO')?.value;
    return this.validatorDocument.fnValidCPF(cpf)
  }

  fnValidaDocumento() {
    let cpf = this.formCad.get('DOCUMENTO')?.value;
    var result = this.validatorDocument.fnValidCPF(cpf)

  }

  fnConsultaCEP() {
    let cep = this.formCad.get('CEP')?.value;

    if (cep != null && cep !== '') {
      this.consultaCEPService.consultaCEP(cep)
        ?.subscribe(dados => this.populaForm(dados));
    }

  }

  populaForm(dados: any) {
    //debugger
    this.formCad.patchValue({
      RUA: dados.logradouro,
      BAIRRO: dados.bairro,
      CEP: dados.cep,
      NUMERO: '',
      COMPLEMENTO: dados.complemento,
      CIDADE: dados.localidade,
      PAIS: dados.pais,
      ESTADO: dados.uf
    })

  }

  fnObterEmail() {
    var token = this.autenticaService.ObterToken();
    this.obterToken.ObterToken(token).subscribe
      (
        tt => {
          //debugger
          this.email = tt.email;
        }
      );
  }

  fnLoadDados() {
    this.dadosCadastraisService.fnMostrarDados(this.userName)
      .subscribe(
        dados => {
          //debugger

          this.nome = (<HTMLInputElement>document.getElementById("inpNome")).value = dados.NOME;
          this.documento = (<HTMLInputElement>document.getElementById("inpDoc")).value = dados.Cadastro.DOCUMENTO;
          this.dataNasc = (<HTMLInputElement>document.getElementById("inpdate")).value = dados.DT_NASCIMENTO.split('T')[0];
          this.telefone = (<HTMLInputElement>document.getElementById("inpTelefone")).value = dados.Cadastro.TELEFONE;
          this.rua = (<HTMLInputElement>document.getElementById("inpRua")).value = dados.Endereco.RUA;
          this.bairro = (<HTMLInputElement>document.getElementById("inputAddress")).value = dados.Endereco.BAIRRO;
          this.numero = (<HTMLInputElement>document.getElementById("inpnumero")).value = dados.Endereco.NUMERO;
          this.complemento = (<HTMLInputElement>document.getElementById("inputAddress2")).value = dados.Endereco.COMPLEMENTO;
          this.bairro = (<HTMLInputElement>document.getElementById("inputAddress")).value = dados.Endereco.BAIRRO;
          this.cidade = (<HTMLInputElement>document.getElementById("inputCity")).value = dados.Endereco.CIDADE;
          this.estado = (<HTMLInputElement>document.getElementById("inputState")).value = dados.Endereco.ESTADO;
          this.cep = (<HTMLInputElement>document.getElementById("inputZip")).value = dados.Endereco.CEP;
          this.pais = (<HTMLInputElement>document.getElementById("inputPais")).value = dados.Endereco.PAIS;

          this.formCad.get('Nome')?.setValue(this.nome);
          this.formCad.get('Dt_Nascimento')?.setValue(this.dataNasc);
          this.formCad.get('DOCUMENTO')?.setValue(this.documento);
          this.formCad.get('TELEFONE')?.setValue(this.telefone);
          this.formCad.get('RUA')?.setValue(this.rua);
          this.formCad.get('NUMERO')?.setValue(this.numero);
          this.formCad.get('CEP')?.setValue(this.cep);

          this.condicaoCad = true;
        },
        error => {
          //debugger

          this.condicaoCad = false;
        }
      )
  }

  validaFormulario() {
    if (this.nome == "" || this.nome == undefined) {
      this.nome = "Digite seu nome";
    }

    if (this.documento == "" || this.documento == undefined) {
      this.documento = "Digite seu CPF";
    }
    if (this.dataNasc == "" || this.dataNasc == undefined) {
      this.dataNasc = "Digite sua data de nascimento";
    }
    if (this.telefone == "" || this.telefone == undefined) {
      this.telefone = "Digite seu Telefone";
    }

    if (this.rua == "" || this.rua == undefined) {
      this.rua = "Digite sua rua";
    }
    if (this.numero == "" || this.numero == undefined) {
      this.numero = "Digite seu numero";
    }
    if (this.cep == "" || this.cep == undefined) {
      this.cep = "Digite seu cep";
    }
    if (this.bairro == "" || this.bairro == undefined) {
      this.bairro = "Digite seu bairro";
    }
    if (this.complemento == "" || this.complemento == undefined) {
      this.complemento = "Digite seu complemento";
    }
    if (this.cidade == "" || this.cidade == undefined) {
      this.cidade = "Digite seu cidade";
    }
    if (this.estado == "" || this.estado == undefined) {
      this.estado = "Digite seu estado";
    }
    if (this.pais == "" || this.pais == undefined) {
      this.pais = "Digite seu pais";
    }

  }

  submitCadastro() {
    var dadosCadastro = this.formCad.getRawValue() as DadosCadastraisModel
    //debugger

    dadosCadastro.Usuario = this.userName;
    dadosCadastro.EMAIL = this.email;

    var novo_dados_Cadastrais = this.fnGeraModel();

    this.cadastroDadosService.CadastraDadosCadastrais(novo_dados_Cadastrais)
      .subscribe(
        status => {
          //debugger
          this.alertService.showAlert("Atualizado com sucesso!", 'success', 3000)
        },
        error => {
          //debugger

          if (error.status == '200') {
            this.alertService.showAlert("Atualizado com sucesso!", 'success', 3000)
          }
          else {
            this.alertService.showAlert("Ocorreu um erro ao cadastrar dados!", 'danger', 3000)
          }
        }
      )
  }

  fnAtualizarCad() {

    var novosDados = this.fnGeraModel()
    this.dadosCadastraisService.fnAtualizarDados(novosDados)
      .subscribe(
        ok => {
          //debugger
          this.alertService.showAlert("Atualizado com sucesso!", 'success', 3000)
        },
        erro => {
          //debugger
          if (erro.status == 200) {
            this.alertService.showAlert("Atualizado com sucesso!", 'success', 3000)
          }
          else {
            this.alertService.showAlert("Erro ao atualizar!", 'danger', 3000)
          }

        }
      )
  }


  fnGeraModel() {
    var dadosCadastro = this.formCad.getRawValue() as DadosCadastraisModel

    var text = '{ "Nome": "' + dadosCadastro.Nome + '", ' + '"dT_NASCIMENTO": "' + dadosCadastro.Dt_Nascimento + '", ' + '"usuario": "' + this.userName + '",' +
      '"cadastro": { "documento": "' + dadosCadastro.DOCUMENTO + '", ' + '"telefone": "' + dadosCadastro.TELEFONE + '", ' + '"email": "' + this.email + '",' +
      '"usuario": "' + this.userName + '" }, ' + '"endereco": { "usuario": "' + this.userName + '",' + '"rua": "' + dadosCadastro.RUA + '", ' +
      '"numero": "' + dadosCadastro.NUMERO + '", ' + '"complemento": "' + dadosCadastro.COMPLEMENTO + '", ' + '"cep": "' + dadosCadastro.CEP + '", ' +
      '"bairro": "' + dadosCadastro.BAIRRO + '", ' + '"cidade": "' + dadosCadastro.CIDADE + '", ' + '"estado": "' + dadosCadastro.ESTADO + '", ' +
      '"pais": "' + dadosCadastro.PAIS + '"}}';

    //debugger
    return JSON.parse(text)
  }

  items: string[] = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ];

  fnCarregaPedidos() {

    this.pagamento.fnMostrarHistorico(this.userName)
      .subscribe({
        next: (dados: ProdutosComprados[]) => {
          //debugger
          this.listPedido = dados;
          this.pedidoVazio = false;
        },
        error: (erro: any) => {
          //debugger
          this.pedidoVazio = true;
        }
      })
  }

}
