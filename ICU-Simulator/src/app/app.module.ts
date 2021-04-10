import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SimulationScreenComponentAdmin } from './simulation-screen-admin/simulation-screen-admin.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SimulationScreenComponentUser } from './simulation-screen-user/simulation-screen-user.component';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from './angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SimulationScreenComponentAdmin,
    SimulationScreenComponentUser,
    CaseStudiesComponent,
    PatientProfileComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
