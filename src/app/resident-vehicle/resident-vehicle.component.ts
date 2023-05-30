import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resident-vehicle',
  templateUrl: './resident-vehicle.component.html',
  styleUrls: ['./resident-vehicle.component.scss'],
})
export class ResidentVehicleComponent {
  vehicleNumber: string = '';
  residentRegistered: boolean = false;

  constructor(private http: HttpClient) {}

  isFormValid(): boolean {
    return !this.vehicleNumber || this.vehicleNumber.trim().length === 0;
  }

  submitForm(): void {
    const data = {
      vehicle_number: this.vehicleNumber,
    };

    console.log(data.vehicle_number);

    this.http
      .post('http://127.0.0.1:8000/api/add-resident-vehicle', data)
      .subscribe(
        (response) => {
          console.log('vehicle created successfully');
          this.residentRegistered = true;
          this.vehicleNumber = "";
          setTimeout(() => {
            this.residentRegistered = false;
          }, 3000);
        },
        (error) => {
          console.error('Error creating vehicle:', error);
        }
      );
  }
}
