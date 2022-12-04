import { Component, Input, OnInit } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() tipo!: string;
  @Input() message!: string;


  constructor(private alert: AlertModule, public bsmodalRef: BsModalRef) { }

  ngOnInit() {}

  Onclose(){
    this.bsmodalRef.hide();
  }
}
