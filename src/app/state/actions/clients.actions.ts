import { createAction, props } from '@ngrx/store';

import * as ActionTypes from './clients.actiontypes';

import { IClients } from '../../shared/models/clients.interface';

export const loadClients = createAction(ActionTypes.LOAD_CLIENTS);

export const loadedClients = createAction(
  ActionTypes.LOADED_CLIENTS,
    props<{ clients: IClients[] }>()
)
