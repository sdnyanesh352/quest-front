import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import{AssignmentComponent} from './assignments/assignment/assignment.component';
import{Forms2509dComponent} from './assignments/forms2509d/forms2509d.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddquestionComponent } from './components/qbank/addquestion/addquestion.component';
import { QuedetailsComponent } from './components/qbank/quedetails/quedetails.component';
const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"employee",component:HomeComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"assignment",component:AssignmentComponent},
  {path:"assignment01",component:Forms2509dComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"qbank/addquestion",component:AddquestionComponent},
  {path:"qbank/quedetails/:id",component:QuedetailsComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
