import { Action } from '@ngrx/store';

import { AirData } from '../core/model';

export class AirDataActions {

  // must be unique identifier for all action module definitions.
  static readonly ACTION_IDENTIFIER = '[AirData]';

  static prependIdentifier(actionName: string): string {
    return AirDataActions.ACTION_IDENTIFIER + ' ' + actionName;
  }

  // tslint:disable:member-ordering
  static readonly RESET_DATA_MODULE = AirDataActions.prependIdentifier('RESET_DATA_MODULE');

  resetModuleState(): Action {
    return {
      type: AirDataActions.RESET_DATA_MODULE
    }
  }

  static readonly LOAD_AIR_DATA = AirDataActions.prependIdentifier('LOAD_AIR_DATA');
  static readonly LOAD_AIR_DATA_COMPLETE = AirDataActions.prependIdentifier('LOAD_AIR_DATA_COMPLETE');
  static readonly LOAD_AIR_DATA_ERROR = AirDataActions.prependIdentifier('LOAD_AIR_DATA_ERROR');

   loadAirData(): Action {
     return {
       type: AirDataActions.LOAD_AIR_DATA,
     }
   }

   loadAirDataComplete(res: AirData): Action {
     return {
       type: AirDataActions.LOAD_AIR_DATA_COMPLETE,
       payload: res
     }
   }

   loadAirDataError(errorMessage: string): Action {
     return {
       type: AirDataActions.LOAD_AIR_DATA_ERROR,
        payload: errorMessage
     }
   }

}
