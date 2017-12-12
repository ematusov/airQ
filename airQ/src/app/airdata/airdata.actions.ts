import { Action } from '@ngrx/store';

import { AirData } from '../core/model';

  export const LOAD_AIR_DATA = ' [airdata] LOAD_AIR_DATA';
  export const LOAD_AIR_DATA_COMPLETE = '[airdata] LOAD_AIR_DATA_COMPLETE';
  export const LOAD_AIR_DATA_ERROR = ' [airdata] LOAD_AIR_DATA_ERROR';

    /**
     * Loading Air Data
     * @class LoadAirData
     * @implements {Action}
     */
  export class LoadAirData implements Action {
    readonly type = LOAD_AIR_DATA;
    constructor () {};
  }

      /**
     * Loading Air Data Success
     * @class LoadAirDataSuccess
     * @implements {Action}
     */
  export class LoadAirDataComplete implements Action {
    readonly type = LOAD_AIR_DATA_COMPLETE;
    constructor(public payload: any) {};
  }

      /**
     * Loading Air Data Error
     * @class LoadAirDataError
     * @implements {Action}
     */
  export class LoadAirDataError implements Action {
    readonly type = LOAD_AIR_DATA_ERROR;
    constructor(public payload: { error: Error}) {};
  }


export type Actions
  = LoadAirData
  | LoadAirDataComplete
  | LoadAirDataError;
