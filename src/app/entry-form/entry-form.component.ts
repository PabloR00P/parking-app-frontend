import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
})
export class EntryFormComponent {
  vehicleNumber: string = '';
  entryRegistered: boolean = false;

  constructor(private http: HttpClient) {}

  isFormValid(): boolean {
    return !this.vehicleNumber || this.vehicleNumber.trim().length === 0;
  }

  submitForm(): void {
    const data = {
      vehicle_number: this.vehicleNumber,
    };

    console.log(data.vehicle_number);

    this.http.post('http://127.0.0.1:8000/api/register-entry', data).subscribe(
      (response) => {
        console.log('Entry created successfully');
        this.entryRegistered = true;
        this.vehicleNumber = '';
        setTimeout(() => {
          this.entryRegistered = false;
        }, 3000);
      },
      (error) => {
        console.error('Error creating entry:', error);
      }
    );
  }
}
