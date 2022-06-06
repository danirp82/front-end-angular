

import { createSelector } from '@ngrx/store'; //TODO <----
import { IAppState } from '../app.state';
import { ClientsState } from '../reducers/clients.reducer';

export const selectClients = (state: IAppState) => state.clients;

export const selectListClients = createSelector(
    selectClients,
    (state: ClientsState) => state.clients
);
