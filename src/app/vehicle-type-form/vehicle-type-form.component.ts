import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-type-form',
  templateUrl: './vehicle-type-form.component.html',
  styleUrls: ['./vehicle-type-form.component.scss'],
})
export class VehicleTypeFormComponent implements OnInit {
  vehicleTypeForm!: FormGroup;
  vehicleTypes!: any[];
  showForm: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.initVehicleTypeForm();
    this.getVehicleTypes();
  }

  initVehicleTypeForm() {
    this.vehicleTypeForm = this.formBuilder.group({
      name: ['', Validators.required],
      paymentPerMinute: ['', Validators.required],
    });
  }

  getVehicleTypes() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/vehicle-types').subscribe(
      (response) => {
        this.vehicleTypes = response;
      },
      (error) => {
        console.error('Error retrieving vehicle types:', error);
      }
    );
  }

  addVehicleType() {
    if (this.vehicleTypeForm.invalid) {
      return;
    }

    const formData = this.vehicleTypeForm.value;

    this.http
      .post('http://127.0.0.1:8000/api/vehicle-types', formData)
      .subscribe(
        (response) => {
          this.vehicleTypeForm.reset();
          this.getVehicleTypes();
        },
        (error) => {
          console.error('Error adding vehicle type:', error);
        }
      );
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
