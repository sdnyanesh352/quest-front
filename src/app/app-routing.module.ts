import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [

  {path:"",component:HomeComponent},

  {path:"employee",component:HomeComponent},
  {path:"contactUs",component:ContactUsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
