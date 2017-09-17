import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { APIModule } from './data-access/api.service.module';

// export { APIService }  from './data-access/api.service';

export * from './interfaces';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
      ],
  exports: [],
  declarations: []
})
export class CoreModule { }
