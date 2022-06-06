import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClientsView } from '../../models/clients-view.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() client!: IClientsView;
  @Input() admin!: boolean;
  @Output() selectClient: EventEmitter<any> = new EventEmitter<any>();

  selectCard() {
    this.selectClient.emit(this.client);
  }

}
