import { Action, ActionReducer } from '@ngrx/store';
import { AirDataActions } from '../airdata.actions';
import { AirDataState, initialState } from './airdata.state';
import { Map, List, Record } from 'immutable';

export function airdataReducer(state: AirDataState = initialState, action: Action) {
  switch (action.type) {
    case AirDataActions.RESET_DATA_MODULE:
      return initialState;

    case AirDataActions.LOAD_AIR_DATA_COMPLETE:
      return state.withMutations((ctx) => {
        ctx.set('testData', action.payload);
      }) as AirDataState;

    default:
      return state;
  };
};
