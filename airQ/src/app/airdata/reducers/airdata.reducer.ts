import { Action, ActionReducer } from '@ngrx/store';
import { AirDataActions } from '../airdata.actions';
import { AirDataState, initialState } from './airdata.state';
import { Map, List, Record } from 'immutable';

export function airdataReducer(state: AirDataState = initialState, action: Action) {
  switch (action.type) {
    case AirDataActions.RESET_DATA_MODULE:
      return initialState;

    // case WeatherActions.LOAD_WEATHER_FOR_LOCATION_COMPLETE:
    //   return state.withMutations((ctx) => {
    //     ctx.set('weather', action.payload);
    //   }) as WeatherState;

    default:
      return state;
  };
};
