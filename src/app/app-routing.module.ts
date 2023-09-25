import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import{AssignmentComponent} from './assignments/assignment/assignment.component';
import{Forms2509dComponent} from './assignments/forms2509d/forms2509d.component'
const routes: Routes = [

  {path:"",component:HomeComponent},

  {path:"employee",component:HomeComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"assignment",component:AssignmentComponent},
  {path:"assignment01",component:Forms2509dComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
