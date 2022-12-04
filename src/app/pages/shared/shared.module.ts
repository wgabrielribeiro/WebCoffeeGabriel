import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertModalComponent],
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
