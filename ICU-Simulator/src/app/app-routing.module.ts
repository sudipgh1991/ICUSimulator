import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SimulationScreenComponentAdminComponent } from './simulation-screen-admin/simulation-screen-admin.component';
import { SimulationScreenComponentUserComponent } from './simulation-screen-user/simulation-screen-user.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'simulationScreenAdmin', component: SimulationScreenComponentAdminComponent },
  { path: 'simulationScreenUser', component: SimulationScreenComponentUserComponent },
  { path: 'caseStudies', component: CaseStudiesComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'patientProfile', component: PatientProfileComponent },
  { path: 'patientProfile/:id', component: PatientProfileComponent },
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
