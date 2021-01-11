import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: "dashboardHome", component: DashboardHomeComponent },
      { path: "", component: DashboardHomeComponent },
      { path: "**", component: DashboardHomeComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
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
