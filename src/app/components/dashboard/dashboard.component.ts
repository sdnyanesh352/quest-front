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
  shouldRun:boolean=true;
  items = [

    { name: "Questions", count: 200 },

    { name: "Companies", count: 20 },

    { name: "Technologies", count: 8 },

    { name: "Users", count: 123 }

  ];
  constructor(private router:Router,public authService: AuthService){

  }
  ngOnInit(): void {}
  newQuestion(){
    this.router.navigateByUrl("/qbank/addquestion");
  }
  fetchQuestions(){
    this.router.navigateByUrl("/questionList");
  }


}
