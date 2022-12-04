import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../pages/shared/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

constructor(private ModalService: BsModalService) {}

showAlert(message: string, tipo: string, tempo: number)
{
  const bsModalRef: BsModalRef = this.ModalService.show(AlertModalComponent);
  bsModalRef.content.tipo = tipo;
  bsModalRef.content.message = message;

  setTimeout(() => {
    bsModalRef.hide();
  }, tempo);
}

}
