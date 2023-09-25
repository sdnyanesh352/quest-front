import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  details:string="Dnyaneshwar";
  countClick:number[]=[];
  isVisible:boolean=true;
  toggleText(){
    this.isVisible=!this.isVisible;
    this.countClick.push(this.countClick.length+1);

  }

}
