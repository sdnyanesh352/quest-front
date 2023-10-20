import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn:boolean=false;
  constructor(private auth:AuthService, private router:Router){
    this.isLoggedIn=auth.isLoggedIn;

  }

}
