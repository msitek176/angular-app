import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent {
  @Input()
  isModal: boolean;

  @Output()
  close  = new EventEmitter<boolean>();

  closeModal(){
    this.close.emit(false)
  }
}
