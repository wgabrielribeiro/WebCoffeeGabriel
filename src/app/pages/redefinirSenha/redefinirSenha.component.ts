import { HttpClient } from '@angular/common/http';
import { RedefineSenhaService } from './../../service/RedefineSenha.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';
import { AlertService } from 'src/app/service/alert.service';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { ResetModel } from 'src/app/model/ResetModel';

@Component({
  selector: 'app-redefinirSenha',
  templateUrl: './redefinirSenha.component.html',
  styleUrls: ['./redefinirSenha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {

  ResetForm!: FormGroup;
  public message: any;
  public bsModalRef!: BsModalRef;

  constructor(private formBuilder: FormBuilder, private router: Router, public ResetService: RedefineSenhaService,
    private autenticaService: AutenticaService, private ModalService: BsModalService, private showalert: AlertService) { }

  ngOnInit() {
    this.ResetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      RePassword: ['', [Validators.required]]
    });
  }


  submitReset() {
    //debugger
    var dadosReset = this.ResetForm.getRawValue() as ResetModel

    this.ResetService.SolicitaReset(dadosReset)
      .subscribe(
        token => {
          debugger
          this.autenticaService.DefineToken(token);
          dadosReset.Token = token[0].message;

          this.ResetService.EfetuaResetUsuario(dadosReset)
            .subscribe(msg => {
              debugger
              this.router.navigate(["/login"]);
              this.showalert.showAlert('Resetado com sucesso, efetue o login novamente.', 'success', 5000);

            },
            erro => {
              debugger
              this.showalert.showAlert('Ocorreu um erro ao tentar redefinir a senha!', 'danger', 3000);
            });

        },
        erro => {
          //debugger

          this.showalert.showAlert('Ocorreu um erro ao tentar redefinir a senha!', 'danger', 3000);
        });
  }
}
