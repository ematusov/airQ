import { Map, List, Record } from 'immutable';

export interface AirDataState extends Map<string, any> {
    testData: string;
}

export const AirDataRecord = Record({
    testData: ''
});

export const initialState: AirDataState = new AirDataRecord() as AirDataState;
