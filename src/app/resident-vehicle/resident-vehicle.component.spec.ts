import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentVehicleComponent } from './resident-vehicle.component';

describe('ResidentVehicleComponent', () => {
  let component: ResidentVehicleComponent;
  let fixture: ComponentFixture<ResidentVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentVehicleComponent]
    });
    fixture = TestBed.createComponent(ResidentVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
