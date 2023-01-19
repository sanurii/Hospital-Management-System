import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './Home/home/home.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { CreatePatientCheckingComponent } from './Doctor/create-patient-checking/create-patient-checking.component';
import { EditPatientCheckingComponent } from './Doctor/edit-patient-checking/edit-patient-checking.component';
import { HomePatientCheckingComponent } from './Doctor/home-patient-checking/home-patient-checking.component';
import { LoginDashboadComponent } from './Dashboard/login-dashboad/login-dashboad.component';
import { CreateAppointmentComponent } from './Patient/create-appointment/create-appointment.component';
import { EditAppointmentComponent } from './Patient/edit-appointment/edit-appointment.component';
import { HomeAppointmentComponent } from './Patient/home-appointment/home-appointment.component';
import { CeatePharmacyComponent } from './Pharmacy/ceate-pharmacy/ceate-pharmacy.component';
import { EditPharmacyComponent } from './Pharmacy/edit-pharmacy/edit-pharmacy.component';
import { HomePharmacyComponent } from './Pharmacy/home-pharmacy/home-pharmacy.component';
import { DoctorloginComponent } from './login/doctorlogin/doctorlogin.component';
import { PatientloginComponent } from './login/patientlogin/patientlogin.component';
import { PharmacyloginComponent } from './login/pharmacylogin/pharmacylogin.component';
import { DoctorDashboardComponent } from './Dashboard/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './Dashboard/patient-dashboard/patient-dashboard.component';
import { PharmacyDashboardComponent } from './Dashboard/pharmacy-dashboard/pharmacy-dashboard.component';
import { UserComponent } from './user/user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppointmentDetailsComponent } from './Doctor/appointment-details/appointment-details.component';
import { PatientCheckingDetailsComponent } from './Pharmacy/patient-checking-details/patient-checking-details.component';

const appRoutes:Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'contacus',component:ContactUsComponent
  },
  {
    path:'aboutus',component:AboutUsComponent
  },



  {
    path: 'logindash', component:LoginDashboadComponent
  },
  {
    path: 'doctordash', component:DoctorDashboardComponent
  },
  {
    path: 'patientdash', component:PatientDashboardComponent
  },
  {
    path: 'pharmacydash', component:PharmacyDashboardComponent
  },




  {
    path: 'home-patientChecking', component: HomePatientCheckingComponent
  },
  {
    path: 'createpatientChecking', component:CreatePatientCheckingComponent
  },
  {
    path: 'edit-patientChecking/:id', component:EditPatientCheckingComponent
  },
  {
    path: 'appoitnmentdetails', component:AppointmentDetailsComponent
  },


  {
    path: 'Home-Appointment', component:HomeAppointmentComponent
  },
  {
    path: 'Create-Appointment', component:CreateAppointmentComponent
  },
  {
    path: 'Edit-Appointment/:id', component:EditAppointmentComponent
  },


  {
    path: 'Home-Pharmacy', component:HomePharmacyComponent
  },
  {
    path: 'Create-Pharmacy', component:CeatePharmacyComponent
  },
  {
    path: 'Edit-Pharmacy/:id', component:EditPharmacyComponent
  },
  {
    path: 'patientcheckingdetails', component:PatientCheckingDetailsComponent
  },



  {
    path: 'doctorlogin', component:DoctorloginComponent
  },
  {
    path: 'patientlogin', component:PatientloginComponent
  },
  {
    path: 'pharmacylogin', component:PharmacyloginComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CreatePatientCheckingComponent,
    EditPatientCheckingComponent,
    HomePatientCheckingComponent,
    LoginDashboadComponent,
    CreateAppointmentComponent,
    EditAppointmentComponent,
    HomeAppointmentComponent,
    CeatePharmacyComponent,
    EditPharmacyComponent,
    HomePharmacyComponent,
    DoctorloginComponent,
    PatientloginComponent,
    PharmacyloginComponent,
    DoctorDashboardComponent,
    PatientDashboardComponent,
    PharmacyDashboardComponent,
    UserComponent,
    AboutUsComponent,
    ContactUsComponent,
    AppointmentDetailsComponent,
    PatientCheckingDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
