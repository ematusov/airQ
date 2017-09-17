import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { AirData } from '../core/model'
import { AppState } from '../app.module';

import { AirDataActions } from './airdata.actions';

import {
  getAirData
} from './reducers/selectors';

@Injectable()
export class AirDataService {
    airData$: Observable<AirData>;

    constructor(private actions: AirDataActions, private store$: Store<AppState>) {
        this.airData$ = store$.let(getAirData());
    }

    resetModuleState() {
        this.store$.dispatch(this.actions.resetModuleState());
    }

    loadAirData() {
      this.store$.dispatch(this.actions.loadAirData());
    }
}
