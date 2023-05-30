import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaymentReportComponent } from './app-payment-report.component';

describe('AppPaymentReportComponent', () => {
  let component: AppPaymentReportComponent;
  let fixture: ComponentFixture<AppPaymentReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPaymentReportComponent]
    });
    fixture = TestBed.createComponent(AppPaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
