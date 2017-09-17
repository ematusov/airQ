import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { AppState } from '../app.module';
//import { APIService } from '../core/core.module';


import { AirDataActions } from './airdata.actions';


@Injectable()
export class AirDataEffects {

  // @Effect()
  // loadWeatherForLocation$ = this.actions$
  //   .ofType(WeatherActions.LOAD_WEATHER_FOR_LOCATION)
  //   .switchMap(action => {
  //     const location = action.payload as string;
  //     return this.api.weather.getWeather(location)
  //       .map(weather =>
  //         this.moduleActions.loadWeatherForLocationComplete(weather)
  //       )
  //       .catch((error: any) => Observable.of(this.moduleActions.loadWeatherForLacationError(error, location)));
  //   });

  constructor(
    private actions$: Actions,
    private moduleActions: AirDataActions,
    private store$: Store<AppState>
  ) { }

}
