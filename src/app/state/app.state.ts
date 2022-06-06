import { ActionReducerMap } from "@ngrx/store";

import { spinnerReducer } from "./reducers/spinner.reducer";
import { clientsReducer, ClientsState } from './reducers/clients.reducer';

export interface IAppState {
  spinnerState: boolean,
  clients: ClientsState
}

export const APP_REDUCERS: ActionReducerMap<IAppState> = {
  spinnerState: spinnerReducer,
  clients: clientsReducer
}
