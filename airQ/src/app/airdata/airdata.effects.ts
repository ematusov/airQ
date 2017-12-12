import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { AppState } from '../app.module';
import { APIService } from '../core/core.module';


import { AirData } from '../core/model';

// importing administrator actions
import * as airDataActions from './airdata.actions';

@Injectable()
export class AirDataEffects {

  @Effect()
  loadAirQualityData$: Observable<Action> = this.actions$
    .ofType('LOAD_AIR_DATA')
    .switchMap(action => {
      //const location = action.payload as string;
        return this.api.airQualityData.testAPI('here')
        .map(airData =>
          new airDataActions.LoadAirDataComplete(airData)
        )
        .catch((error: any) => Observable.of(new airDataActions.LoadAirDataError(error)));
    });

  constructor(
    private actions$: Actions,
    private api: APIService,
    private store$: Store<AppState>
  ) { }

}
