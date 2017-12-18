import { Action, ActionReducer } from '@ngrx/store';
import { AirDataState, initialState } from './airdata.state';
import { Map, List, Record } from 'immutable';

// need to import the actions with the methods they contain
import { AirDataActions } from '../airdata.actions';

// we import each individual method under 'actiontypes' to distinguish the high level actions from the methods within them
import * as AirDataActionTypes from '../airdata.actions';

export function airdataReducer(state: AirDataState = initialState, action: AirDataActions): AirDataState {
  switch (action.type) {

    case AirDataActionTypes.LOAD_AIR_DATA_COMPLETE:
      return { ...state, ... {
        testData: action.payload,
      }}

    default:
      return state;
  };
};
