import { Component, OnInit } from '@angular/core';
import { AutenticaService } from 'src/app/service/Autentica.service';

@Component({
  selector: 'app-navMenu',
  templateUrl: './navMenu.component.html',
  styleUrls: ['./navMenu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private autenticaService: AutenticaService) { }

  ngOnInit() {
  }
  fnLogout() {
    this.autenticaService.logout();
  }

}
