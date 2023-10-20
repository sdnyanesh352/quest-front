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
  }

 
  
   //this function needs improvement when out of index
/*   previous(){
    this.id= this.router.snapshot.paramMap.get('id');
    var previousId=parseInt(this.id)-1;
    this.route.navigateByUrl("/qbank/quedetails/"+previousId)
    this.qservice.getqdetailsById(previousId).subscribe((qform)=>{
      if(!(this.id)==(this.data.id)){
        this.isQuestionsAvailable=false;
console.error("Thats it!!!");
      }
      //this.data=JSON.stringify(qform);
      this.data=qform;
    })
  } */

  //this function needs improvement when out of index
 /*  next(){
    this.id= this.router.snapshot.paramMap.get('id');
    var nextId=parseInt(this.id)+1;
    this.route.navigateByUrl("/qbank/quedetails/"+nextId)
    this.qservice.getqdetailsById(nextId).subscribe((qform)=>{
      if(!(this.id)==(this.data.id)){
        this.isQuestionsAvailable=false;
console.error("Thats it!!!");
      }
      //this.data=JSON.stringify(qform);
      this.data=qform;
    })
      
  } */
/* previous(){
  if ((this.currentQuestionIndex > 0)) {
    this.currentQuestionIndex--;
    this.isNextAvailable=true;
  } else {
    // Handle the case when you reach the end of the list.
    // You can choose to wrap back to the beginning or do something else.
    console.log("End of questions reached.");
    this.isPreviousAvailable=false;
  }
}
moveToPreviousQuestion() {
  this.previous(); // Move to the previous question
  const currentQuestion = this.questions[this.currentQuestionIndex];
  console.log("Current Question:", currentQuestion);
}
  
next(){
  if (this.currentQuestionIndex < this.questions.length - 1) {
    this.currentQuestionIndex++;
    this.isPreviousAvailable=true;
  } else {
    // Handle the case when you reach the end of the list.
    // You can choose to wrap back to the beginning or do something else.
    console.log("End of questions reached.");
    this.isNextAvailable=false;
  }
} */

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
