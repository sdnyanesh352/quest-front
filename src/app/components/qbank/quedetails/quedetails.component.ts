import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Qform } from 'src/app/alerts/model/qform';
import { QserviceService } from 'src/app/services/qservice.service';
import { RatingService } from 'src/app/services/rating.service';

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
  istoReported:boolean=false;
  userRating: number = 0;

  constructor(private router:ActivatedRoute, private qservice:QserviceService,private route:Router,private ratingService: RatingService){
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
saveRating() {
  this.id= this.router.snapshot.paramMap.get('id');
  this.ratingService.saveRating(this.id, this.userRating)
    .subscribe(response => {
      // Handle the response from the server if needed
      console.log('Rating saved:', response);
    });
}
getRatings() {
  this.ratingService.getRatings(this.id)
    .subscribe(ratings => {
      // Use the ratings data, and calculate average if needed
      const averageRating = this.ratingService.calculateAverageRating(ratings);
    });
  }


}
