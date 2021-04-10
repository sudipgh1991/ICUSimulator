import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SimulationScreenComponentAdmin } from './simulation-screen-admin/simulation-screen-admin.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SimulationScreenComponentUser } from './simulation-screen-user/simulation-screen-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulationScreenComponentAdmin,
    SimulationScreenComponentUser,
    CaseStudiesComponent,
    PatientProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
