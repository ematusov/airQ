import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


//material imports
import { MdButtonModule, MdToolbarModule, MdCardModule, MdInputModule } from '@angular/material';

import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AirDataModule } from './airdata/airdata.module';

import { AppState, reducer } from './reducers';
import { HeaderComponent } from './header/header.component';
export { AppState };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    RouterModule.forRoot([{path: '', redirectTo: '/airqualitydata', pathMatch: 'full'}]),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AirDataModule,
    CoreModule
  ],
  providers: [],
  exports: [
    MdCardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
