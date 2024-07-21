import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeChecksDialogComponent } from './trade-checks-dialog.component';

describe('TradeChecksDialogComponent', () => {
  let component: TradeChecksDialogComponent;
  let fixture: ComponentFixture<TradeChecksDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeChecksDialogComponent]
    });
    fixture = TestBed.createComponent(TradeChecksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
