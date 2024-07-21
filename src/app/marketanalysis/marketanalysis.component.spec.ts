import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketanalysisComponent } from './marketanalysis.component';

describe('MarketanalysisComponent', () => {
  let component: MarketanalysisComponent;
  let fixture: ComponentFixture<MarketanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketanalysisComponent]
    });
    fixture = TestBed.createComponent(MarketanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
