import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { AppState } from '../app.module';
import { APIService } from '../core/core.module';


import { AirDataActions } from './airdata.actions';
import { AirData } from '../core/model';

@Injectable()
export class AirDataEffects {

  @Effect()
  loadAirQualityData$ = this.actions$
    .ofType(AirDataActions.LOAD_AIR_DATA)
    .switchMap(action => {
      //const location = action.payload as string;
        return this.api.airQualityData.testAPI('here')
        .map(res =>
          this.moduleActions.loadAirDataComplete(res)
        )
        .catch((error: any) => Observable.of(this.moduleActions.loadAirDataError(error)));
    });

  constructor(
    private actions$: Actions,
    private api: APIService,
    private moduleActions: AirDataActions,
    private store$: Store<AppState>
  ) { }

}
