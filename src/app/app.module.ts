import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { FormsModule } from '@angular/forms';
import { VehicleTypeFormComponent } from './vehicle-type-form/vehicle-type-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OfficialVehicleComponent } from './official-vehicle/official-vehicle.component';
import { ResidentVehicleComponent } from './resident-vehicle/resident-vehicle.component';
import { AppPaymentReportComponent } from './app-payment-report/app-payment-report.component';
import { StartMonthComponent } from './start-month/start-month.component';
import { ExitFormComponent } from './exit-form/exit-form.component';

@NgModule({
  declarations: [AppComponent, EntryFormComponent, VehicleTypeFormComponent, OfficialVehicleComponent, ResidentVehicleComponent, AppPaymentReportComponent, StartMonthComponent, ExitFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
