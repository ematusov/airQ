// 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';

// pages
import { AirQualityDataComponent } from './pages/airqualitypage.component'

// components

// state
import { AirDataActions } from './airdata.actions';
import { AirDataEffects } from './airdata.effects';

import { AirDataService } from './airdata.service';

// exports
export { AirDataActions, AirDataService }
export { AirDataState } from './reducers/airdata.state';
export { airdataReducer } from './reducers/airdata.reducer';

const routes: Routes = [
  {path: 'airqualitydata', component: AirQualityDataComponent}
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(AirDataEffects),
    RouterModule.forChild(routes),
  ],
  declarations: [
    AirQualityDataComponent
  ],
  providers: [
    AirDataService,
    AirDataActions
  ]
})
export class AirDataModule { }
