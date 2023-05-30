import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { VehicleTypeFormComponent } from './vehicle-type-form/vehicle-type-form.component';
import { OfficialVehicleComponent } from './official-vehicle/official-vehicle.component';
import { ResidentVehicleComponent } from './resident-vehicle/resident-vehicle.component';
import { AppPaymentReportComponent } from './app-payment-report/app-payment-report.component';
import { StartMonthComponent } from './start-month/start-month.component';
import { ExitFormComponent } from './exit-form/exit-form.component';

const routes: Routes = [
  { path: 'entry', component: EntryFormComponent },
  { path: 'exit', component: ExitFormComponent },
  { path: 'types', component: VehicleTypeFormComponent },
  { path: 'official', component: OfficialVehicleComponent },
  { path: 'resident', component: ResidentVehicleComponent },
  { path: 'payment-report', component: AppPaymentReportComponent },
  { path: 'start-month', component: StartMonthComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
