import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModel } from '../../model/LoginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Token } from '@angular/compiler';
import { AutenticaService } from 'src/app/service/Autentica.service';
import { AlertService } from 'src/app/service/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  public message: any;
  public bsModalRef!: BsModalRef;
  public bolAutenticate: boolean = false;
  private countLogin!: any;

  constructor(private formBuilder: FormBuilder, private router: Router, public loginService: LoginService,
    private autenticaService: AutenticaService, private ModalService: BsModalService, private showalert: AlertService) { }

  ngOnInit(): void {
    this.autenticaService.logout();

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submitLogin() {
    // debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel

    this.loginService.LoginUsuario(dadosLogin)
      .subscribe(
        token => {
          //debugger
          this.autenticaService.isAtivado('true');
          this.autenticaService.setCurrenteUser(token.usuario);
          this.autenticaService.DefineToken(token.token);
          this.router.navigate(["/produtos"]);
          this.showalert.showAlert('Logado com sucesso!', 'success', 3000)
        },
        erro => {
          //debugger
          this.autenticaService.isAtivado('false');
          this.showalert.showAlert('Usuario e/ou senha inválidos', 'danger', 3000)
        });
  }

  usuarioEstaAutenticado() {
    debugger
    var retorno = this.autenticaService.isAtivadoRetorno();

    if (retorno == 'true') {
      return true;
    }
    return false;
  }




}
