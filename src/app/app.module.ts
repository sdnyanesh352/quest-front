import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { FramesComponent } from './components/frames/frames.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { Forms2509dComponent } from './assignments/forms2509d/forms2509d.component';
import { AssignmentComponent } from './assignments/assignment/assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { AddquestionComponent } from './components/qbank/addquestion/addquestion.component';
import { QlistComponent } from './components/qbank/qlist/qlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuedetailsComponent } from './components/qbank/quedetails/quedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    FramesComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    Forms2509dComponent,
    AssignmentComponent,
    EmpListComponent,
    AddquestionComponent,
    QlistComponent,
    DashboardComponent,
    QuedetailsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
