import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SimulationScreenComponent } from './simulation-screen/simulation-screen.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

@NgModule({
  declarations: [AppComponent, SimulationScreenComponent, CaseStudiesComponent],
  imports: [BrowserModule, AppRoutingModule, HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
