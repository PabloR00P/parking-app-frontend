import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start-month',
  templateUrl: './start-month.component.html',
  styleUrls: ['./start-month.component.scss'],
})
export class StartMonthComponent {
  monthStarted: boolean = false;

  constructor(private http: HttpClient) {}

  submitForm(): void {
    this.http.get('http://127.0.0.1:8000/api/start-month').subscribe(
      (response) => {
        this.monthStarted = true;
        setTimeout(() => {
          this.monthStarted = false;
        }, 3000);
      },
      (error) => {
        console.error('Error start month:', error);
      }
    );
  }
}
