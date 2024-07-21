import { TestBed } from '@angular/core/testing';

import { TradingJournalService } from './trading-journal.service';

describe('TradingJournalService', () => {
  let service: TradingJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingJournalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
