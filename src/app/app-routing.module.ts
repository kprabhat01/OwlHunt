import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRequisitionComponent } from './add-requisition/add-requisition.component';
import { AddUserSelfComponent } from './add-user-self/add-user-self.component';
import { ResetAuthComponent } from './auth-reset/reset-auth/reset-auth.component';
import { ResetPassComponent } from './auth-reset/reset-pass/reset-pass.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResumeFileComponent } from './resume-file/resume-file.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: "dashboardHome", component: DashboardHomeComponent },
      { path: "addReq", component: AddRequisitionComponent },
      { path: "uploadReq", component: ResumeFileComponent },
      { path: "addUser", component: AddUserSelfComponent },
      { path: "", component: DashboardHomeComponent },
      { path: "**", component: DashboardHomeComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "resetAuth", component: ResetAuthComponent },
  { path: "verifyToken/:token", component: ResetPassComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true, anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
