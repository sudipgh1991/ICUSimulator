import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SimulationScreenComponentAdmin } from './simulation-screen-admin/simulation-screen-admin.component';
import { SimulationScreenComponentUser } from './simulation-screen-user/simulation-screen-user.component';

const routes: Routes = [
  { path: 'simulationScreenAdmin', component: SimulationScreenComponentAdmin },
  { path: 'simulationScreenUser', component: SimulationScreenComponentUser },
  { path: 'caseStudies', component: CaseStudiesComponent },
  { path: 'patientProfile', component: PatientProfileComponent },
  { path: 'patientProfile/:id', component: PatientProfileComponent },
  { path: '', redirectTo: '/simulationScreenAdmin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
