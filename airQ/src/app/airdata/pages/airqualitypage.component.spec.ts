/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirqualitydataComponent } from './airqualitydata.component';

describe('AirqualitydataComponent', () => {
  let component: AirqualitydataComponent;
  let fixture: ComponentFixture<AirqualitydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirqualitydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirqualitydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
