import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpInterceptorService } from './api/http-interceptor.service';
import { CountryComponent } from './shared/country/country.component';
import { CompanyComponent } from './shared/company/company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ResumeFileComponent } from './resume-file/resume-file.component';
import { ResumeSearchComponent } from './resume-search/resume-search.component';
import { AddRequisitionComponent } from './add-requisition/add-requisition.component';
import { AssignRequisitionComponent } from './assign-requisition/assign-requisition.component';
import { AddUserSelfComponent } from './add-user-self/add-user-self.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CountryComponent,
    CompanyComponent,
    DashboardComponent,
    DashboardHomeComponent,
    ModalComponent,
    ResumeFileComponent,
    ResumeSearchComponent,
    AddRequisitionComponent,
    AssignRequisitionComponent,
    AddUserSelfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
