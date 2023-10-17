import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn: boolean;
  constructor(private router:Router,public authService: AuthService){

  }
  ngOnInit(): void {}

  newQuestion(){
    this.router.navigateByUrl("/qbank/addquestion");

  }
  SignOut(){
    this.authService.SignOut();
    this.isLoggedIn=this.authService.isLoggedIn;
    if(!this.isLoggedIn){
      this.router.navigateByUrl("/sign-in");

    }

  }

}
