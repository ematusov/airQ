import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { AppState } from '../app.module';

import { AirDataActions } from './airdata.actions';

import {

} from './reducers/selectors';

@Injectable()
export class AirDataService {
    // weather$: Observable<Weather>;

    // constructor(private actions: WeatherActions, private store$: Store<AppState>) {
    //     this.weather$ = store$.let(getWeather());
    // }

    // resetModuleState() {
    //     this.store$.dispatch(this.actions.resetModuleState());
    // }

    // loadWeatherForLocation(location: string) {
    //   this.store$.dispatch(this.actions.loadWeatherForLocation(location));
    // }
}
