import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-payment-report',
  templateUrl: './app-payment-report.component.html',
  styleUrls: ['./app-payment-report.component.scss'],
})
export class AppPaymentReportComponent {
  residentPayments!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPaymentData();
  }

  getPaymentData() {
    this.http
      .get<any[]>('http://127.0.0.1:8000/api/generate-payment-data')
      .subscribe(
        (response) => {
          console.log(response)
          this.residentPayments = response;
        },
        (error) => {
          console.error('Error retrieving vehicle types:', error);
        }
      );
  }

  downloadReport() {
    const reportFilename = 'payment_report.txt';

    this.http
      .get('http://127.0.0.1:8000/api/generate-payment-report', {
        responseType: 'blob',
      })
      .subscribe((response) => {
        console.log('response', response);
        const file = new Blob([response], { type: 'text/plain' });
        saveAs(file, reportFilename);
      });
  }
}
