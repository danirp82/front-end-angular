import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';

import { Observable } from 'rxjs/internal/Observable';
import { selectSpinner$ } from 'src/app/state/selectors/spinner.selectors';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  showSpinner$!: Observable<boolean>;

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.showSpinner$ = this.store.select(selectSpinner$);
  }

}
