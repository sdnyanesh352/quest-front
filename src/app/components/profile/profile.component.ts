import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  isLoggedIn: boolean;
  constructor(private router:Router,public authService: AuthService){

  }
  ngOnInit(): void {}

 
  SignOut(){
    this.authService.SignOut();
    this.isLoggedIn=this.authService.isLoggedIn;
    if(!this.isLoggedIn){
      this.router.navigateByUrl("/sign-in");

    }

  }

}
