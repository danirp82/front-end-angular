import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';
import { loadClients } from '../../state/actions/clients.actions';
import { selectListClients } from 'src/app/state/selectors/clients.selector';

import { forkJoin } from 'rxjs';

import { ClientsService } from 'src/app/core/api/clients.service';
import { DetailHelper } from './detail.helper';

import { IClients } from '../../shared/models/clients.interface';
import { LoginService } from '../../core/api/login.service';
import { IClientsView } from '../../shared/models/clients-view.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  clientsView: IClientsView[] = [];
  selectedClient!: IClientsView;
  showModal: boolean = false;
  adminRole: boolean = false;
  constructor(
    private store: Store<IAppState>,
    private clientsService: ClientsService,
    private loginService: LoginService,
    private helper: DetailHelper
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadClients());
    this.adminRole = this.loginService.getRole();
    this.store.select(selectListClients)
      .subscribe((clients) => {
        this.getClientsView(clients);
      })
  }

  select(event: IClientsView) {
    this.selectedClient = event;
    this.showModal = true;
  }

  private getClientsView(clients:IClients[]) {
    const arr = clients.map(client => this.clientsService.getClientsDetail(client.subject));
    forkJoin(arr).subscribe(results => this.clientsView = this.helper.getClientsView(clients, results));
  }

}
