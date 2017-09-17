import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//need core module

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AirDataModule } from './airdata/airdata.module';

import { AppState, reducer } from './reducers';
export { AppState };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot([{path: '', redirectTo: '/airqualitydata', pathMatch: 'full'}]),
    StoreModule.provideStore(reducer),
    AirDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
