

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; //TODO <---
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { ClientsService } from 'src/app/core/api/clients.service';

import * as ActionTypes from '../actions/clients.actiontypes';

@Injectable()
export class ClientsEffects {

    loadClients$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.LOAD_CLIENTS),
        mergeMap(() => this.clientsService.getClients()
            .pipe(
              map(clients => {
                const collator = new Intl.Collator('en');
                const sortClients = clients.sort((x,y) => collator.compare(x.name, y.name))
                return { type: ActionTypes.LOADED_CLIENTS, clients: sortClients }
              }),
              // map(clients => ({ type: ActionTypes.LOADED_CLIENTS, clients })),
              catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private clientsService: ClientsService
    ) { }
}
