import { createReducer, on } from '@ngrx/store';

import { IClients } from '../../shared/models/clients.interface';
import { loadClients, loadedClients } from '../actions/clients.actions';

export interface ClientsState {
    clients: IClients[];
}
export const initialState: ClientsState = {
  clients: []
};

export const clientsReducer = createReducer(
    initialState,
    on(loadClients, (state) => {
      return { ...state }
    }),
    on(loadedClients, (state, {clients}) => {
      return { ...state, clients }
    })
);
