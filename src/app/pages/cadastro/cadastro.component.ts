import { ValidatorPasswordService } from './../../service/ValidatorPassword.service';
import { CadastroService } from './../../service/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { CadastroModel } from 'src/app/model/CadastroModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  CadastroForm!: FormGroup;
  public message: any;
  public bsModalRef!: BsModalRef;

  constructor(private formBuilder: FormBuilder, private router: Router, public cadastroService: CadastroService,
    private autenticaService: AutenticaService, private ModalService: BsModalService, private showalert: AlertService, private validator: ValidatorPasswordService) { }

  ngOnInit(): void {
    this.CadastroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      Password: ['', Validators.compose([Validators.required])],
      RePassword: ['', Validators.compose([Validators.required])]
       //['', [Validators.required]]
    },
      {
        validator: this.validator.MatchPassword('Password', 'RePassword'),
      });
  }




  submitCadastro() {
    debugger
    var dadosLogin = this.CadastroForm.getRawValue() as CadastroModel

    this.cadastroService.CadastraUsuario(dadosLogin)
      .subscribe(
        token => {
          this.autenticaService.DefineToken(token);
          this.router.navigate(["/login"]);
          this.showalert.showAlert('Cadastrado com sucesso! Será necessário realizar validação do cadastro em seu e-mail.', 'success', 5000)
        },
        erro => {
          debugger
          if (erro.error.includes('is already')) {
            this.showalert.showAlert('O usuário/Email já existe!', 'danger', 3000)
          }
          else if (erro.error.includes('PasswordTooShort')) {
            this.showalert.showAlert('A senha não cumpriu os requisitos, tente novamente!', 'danger', 3000)
          }
          else {
            debugger
            this.showalert.showAlert('Ocorreu um erro ao realizar cadastro, verifique os dados e tente novamente!', 'danger', 3000)
          }


        });
  }

}
