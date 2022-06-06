import { createSelector } from "@ngrx/store";
import { IAppState } from '../app.state';

export const spinnerSelector = (state: IAppState) => state.spinnerState;

export const selectSpinner$ = createSelector(
  spinnerSelector,
  (state: boolean) => state
)
