import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradechecksComponent } from './tradechecks.component';

describe('TradechecksComponent', () => {
  let component: TradechecksComponent;
  let fixture: ComponentFixture<TradechecksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradechecksComponent]
    });
    fixture = TestBed.createComponent(TradechecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
