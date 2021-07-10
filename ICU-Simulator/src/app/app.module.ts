import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SimulationScreenComponentAdminComponent } from './simulation-screen-admin/simulation-screen-admin.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './loader/service/loader.interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SimulationScreenComponentUserComponent } from './simulation-screen-user/simulation-screen-user.component';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SimulationScreenComponentAdminComponent,
    SimulationScreenComponentUserComponent,
    CaseStudiesComponent,
    PatientProfileComponent,
    SigninComponent,
    LoaderComponent,
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
    NgbModule,
    NgbToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
