import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "login",    component: LoginComponent   },
  { path: "signup",   component: SignupComponent  },
  { path: "",         component: HomeComponent    },
  { path: "**",       component: HomeComponent    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true, anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
