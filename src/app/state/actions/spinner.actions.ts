import { createAction } from "@ngrx/store";
import * as ActionTypes from './spinner.actiontypes';

export const showSpinner = createAction(ActionTypes.SHOW);
export const hideSpinner = createAction(ActionTypes.HIDE);
