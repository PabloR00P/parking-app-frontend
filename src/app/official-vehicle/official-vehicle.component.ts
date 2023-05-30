import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-official-vehicle',
  templateUrl: './official-vehicle.component.html',
  styleUrls: ['./official-vehicle.component.scss'],
})
export class OfficialVehicleComponent {
  vehicleNumber: string = '';
  officialRegistered: boolean = false;

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
      .post('http://127.0.0.1:8000/api/add-official-vehicle', data)
      .subscribe(
        (response) => {
          console.log('vehicle created successfully');
          this.officialRegistered = true;
          this.vehicleNumber = '';
          setTimeout(() => {
            this.officialRegistered = false;
          }, 3000);
        },
        (error) => {
          console.error('Error creating vehicle:', error);
        }
      );
  }
}
