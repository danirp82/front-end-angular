import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() client!: any;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  close() {
    this.closeModal.emit();
  }

}
