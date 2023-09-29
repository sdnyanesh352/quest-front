import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qform } from 'src/app/alerts/model/qform';
import { QserviceService } from 'src/app/services/qservice.service';

@Component({
  selector: 'app-quedetails',
  templateUrl: './quedetails.component.html',
  styleUrls: ['./quedetails.component.css']
})
export class QuedetailsComponent {
  id!: any ;
  data:any;
  isQuestionsAvailable:boolean=true;
  selectedRating:number=0;

  constructor(private router:ActivatedRoute, private qservice:QserviceService,private route:Router){
    this.id= this.router.snapshot.paramMap.get('id');

    this.loadDataById(this.id);

  }
   //this function needs improvement when out of index
  previous(){
    this.id= this.router.snapshot.paramMap.get('id');
    var previousId=parseInt(this.id)-1;
    this.route.navigateByUrl("/qbank/quedetails/"+previousId)
    this.qservice.getqdetailsById(String(previousId)).subscribe((qform)=>{
      if(!(this.id)==(this.data.id)){
        this.isQuestionsAvailable=false;
console.error("Thats it!!!");
      }
      //this.data=JSON.stringify(qform);
      this.data=qform;
    })
  }

  //this function needs improvement when out of index
  next(){
    this.id= this.router.snapshot.paramMap.get('id');
    var nextId=parseInt(this.id)+1;
    this.route.navigateByUrl("/qbank/quedetails/"+nextId)
    this.qservice.getqdetailsById(String(nextId)).subscribe((qform)=>{
      if(!(this.id)==(this.data.id)){
        this.isQuestionsAvailable=false;
console.error("Thats it!!!");
      }
      //this.data=JSON.stringify(qform);
      this.data=qform;
    })
      
  }
  loadDataById(id:string){
    this.qservice.getqdetailsById(id).subscribe((qform)=>{
      //this.data=JSON.stringify(qform);
      this.id=id;
      this.data=qform;
    })
  }


}
