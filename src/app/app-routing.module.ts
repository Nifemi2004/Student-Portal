import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentRecordsComponent } from './student/student-records/student-records.component';
// import { ErrorComponent } from './error/error.component';
// import { AuthCanActivateGuardGuard } from './_guards/auth.can-activate.guard.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthCanActivateGuardGuard]
  },
  {
    path: 'studentform',
    component: StudentFormComponent,
  },
  {
    path: 'studentrecord',
    component: StudentRecordsComponent,
  },
  // {
  //   path: '**',
  //   component: ErrorComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
