import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exit-form',
  templateUrl: './exit-form.component.html',
  styleUrls: ['./exit-form.component.scss'],
})
export class ExitFormComponent {
  vehicleNumber: string = '';
  exitRegistered: boolean = false;

  constructor(private http: HttpClient) {}

  isFormValid(): boolean {
    return !this.vehicleNumber || this.vehicleNumber.trim().length === 0;
  }

  submitForm(): void {
    const data = {
      vehicle_number: this.vehicleNumber,
    };

    console.log(data.vehicle_number);

    this.http.post('http://127.0.0.1:8000/api/register-exit', data).subscribe(
      (response) => {
        console.log('Exit created successfully');
        this.exitRegistered = true;
        this.vehicleNumber = '';
        setTimeout(() => {
          this.exitRegistered = false;
        }, 3000);
      },
      (error) => {
        console.error('Error creating entry:', error);
      }
    );
  }
}
