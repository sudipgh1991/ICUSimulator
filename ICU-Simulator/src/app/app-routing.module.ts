import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SimulationScreenComponent } from './simulation-screen/simulation-screen.component';

const routes: Routes = [
  { path: 'simulationScreen', component: SimulationScreenComponent },
  { path: 'caseStudies', component: CaseStudiesComponent },
  { path: 'patientProfile', component: PatientProfileComponent },
  { path: 'patientProfile/:id', component: PatientProfileComponent },
  { path: '', redirectTo: '/simulationScreen', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
