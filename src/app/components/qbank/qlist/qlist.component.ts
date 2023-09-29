import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Qform } from 'src/app/alerts/model/qform';
import { QserviceService } from 'src/app/services/qservice.service';

@Component({
  selector: 'app-qlist',
  templateUrl: './qlist.component.html',
  styleUrls: ['./qlist.component.css']
})
export class QlistComponent {
  data: any;
  @Input() qform!:Qform;
  constructor(private qservice:QserviceService,private router:Router){
this.qservice.getData().subscribe((data)=>{
  this.data=data;
  console.log("Qlist data :"+JSON.stringify(this.data));
})
console.log(this.data);
  }
  getqDetails(qform:Qform){
    this.qform=qform;
    console.log("Question is :"+JSON.stringify(this.qform));
    //this.qservice.getquestionDetails(qform);
    this.router.navigateByUrl("/qbank/quedetails/"+JSON.stringify(this.qform['id']))

  }
}
