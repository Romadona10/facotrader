import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnChartComponent } from './learn-chart.component';

describe('LearnChartComponent', () => {
  let component: LearnChartComponent;
  let fixture: ComponentFixture<LearnChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnChartComponent]
    });
    fixture = TestBed.createComponent(LearnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
