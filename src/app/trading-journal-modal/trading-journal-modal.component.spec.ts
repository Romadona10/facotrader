import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingJournalModalComponent } from './trading-journal-modal.component';

describe('TradingJournalModalComponent', () => {
  let component: TradingJournalModalComponent;
  let fixture: ComponentFixture<TradingJournalModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingJournalModalComponent]
    });
    fixture = TestBed.createComponent(TradingJournalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
