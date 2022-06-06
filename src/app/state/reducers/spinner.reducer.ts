import { createReducer, on } from "@ngrx/store";
import { showSpinner, hideSpinner  } from '../actions/spinner.actions';

export const initialState: boolean = false;

export const spinnerReducer = createReducer(
  initialState,
  on(showSpinner, () => {
    return true
  }),
  on(hideSpinner, () => {
    return false
  }),
)
