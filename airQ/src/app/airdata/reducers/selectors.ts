import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { AppState } from '../../app.module';
import { Selector } from '../../core/core.module';

import { AirData } from '../../core/model';

export function getAirData(): Selector<AppState, AirData> {
  return state$ => state$.map(state => state.airdata.testData).distinctUntilChanged();
}
