import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  details:string="Dnyaneshwar";
  countClick:number[]=[];
  isVisible:boolean=true;
  toggleText(){
    this.isVisible=!this.isVisible;
    this.countClick.push(this.countClick.length+1);

  }

}
