import { AutenticaService } from 'src/app/service/Autentica.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechamentoPedido',
  templateUrl: './fechamentoPedido.component.html',
  styleUrls: ['./fechamentoPedido.component.css']
})
export class FechamentoPedidoComponent implements OnInit {

  constructor(private autenticaService: AutenticaService) { }

  ngOnInit() {
    this.fnNumeroPedido();
  }

  public numPedido: number = 0;
  public userName = this.autenticaService.getCurrentUser()?.replace('"', '');

  fnNumeroPedido(){
    this.numPedido = Math.floor(Math.random() * 65536);
  }

}
