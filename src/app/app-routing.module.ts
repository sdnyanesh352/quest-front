import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import{AssignmentComponent} from './assignments/assignment/assignment.component';
import{Forms2509dComponent} from './assignments/forms2509d/forms2509d.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddquestionComponent } from './components/qbank/addquestion/addquestion.component';
import { QuedetailsComponent } from './components/qbank/quedetails/quedetails.component';
import { SigupComponent } from './components/login/sigup/sigup.component';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/login/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { QlistComponent } from './components/qbank/qlist/qlist.component';
import { SettingsComponent } from './components/settings/settings.component';
import { QuizplayerComponent } from './components/quizplayer/quizplayer.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SharedashboardComponent } from './components/sharedashboard/sharedashboard.component';
const routes: Routes = [
 {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path:"home",component:HomeComponent},
  {path:"share",component:SharedashboardComponent},
  {path:"setting",component:SettingsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"assignment",component:AssignmentComponent},
  {path:'questionList', component:QlistComponent},
  {path:"assignment01",component:Forms2509dComponent},
  {path:"dashboard",component:DashboardComponent, canActivate: [AuthGuard]},
  {path:"qbank/addquestion",component:AddquestionComponent},
  {path:"quizplayer",component:QuizplayerComponent},
  {path:"qbank/quedetails/:id",component:QuedetailsComponent},
  {path:"quiz/:id",component:QuizComponent},
  {path:'register-user',component:SigupComponent},
  {path:'sign-in',component:LoginComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
