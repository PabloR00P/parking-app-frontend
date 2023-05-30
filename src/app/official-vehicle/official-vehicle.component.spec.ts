import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialVehicleComponent } from './official-vehicle.component';

describe('OfficialVehicleComponent', () => {
  let component: OfficialVehicleComponent;
  let fixture: ComponentFixture<OfficialVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficialVehicleComponent]
    });
    fixture = TestBed.createComponent(OfficialVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
