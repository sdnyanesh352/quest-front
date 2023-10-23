import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qform } from 'src/app/model/qform';
import { QserviceService } from 'src/app/services/qservice.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-quedetails',
  templateUrl: './quedetails.component.html',
  styleUrls: ['./quedetails.component.css']
})
export class QuedetailsComponent  {
  id!: number ;
  data:any;
  selectedRating:number=0;
  istoReported:boolean=false;
  userRating: number = 0;
  question: Qform;
  currentQuestionIndex = 0;
  isNextAvailable:boolean=true;
  isPreviousAvailable:boolean=false;

  constructor(private http:HttpClient,  private router:ActivatedRoute, private qservice:QserviceService,private route:Router,private ratingService: RatingService){
    this.id= Number(this.router.snapshot.paramMap.get('id'));
     this.loadDataById(this.id);
     this.ratingService.getqdetailsById(this.id).subscribe((qq)=>{
      this.data=qq;
this.calculateAverageRating(this.data.qrating);
     })
  }

  loadDataById(id:number){
    this.qservice.getqdetailsById(id).subscribe((qform)=>{
      //this.data=JSON.stringify(qform);
      this.id=id;
      this.data=qform;
      console.log("Its Called"+JSON.stringify(this.data));
    })
  }
report(){
this.istoReported=true;
}
 calculateAverageRating(ratings: number[] | undefined): number {
  if (!ratings || ratings.length === 0) {
    return 0; // Handle the case when ratings is undefined or empty.
  }

  const sum = ratings.reduce((total, rating) => total + rating, 0);
  const average = sum / ratings.length;

  return average;
}

}
