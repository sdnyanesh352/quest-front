import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css']
})
export class StarratingComponent {
  @Input() maxRating: number = 5;
  @Input() initialRating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();

  rating: number = this.initialRating;
  @Input() id: number; // Input to identify the question

  userRating: number = 0; // The user's selected rating

  constructor(private ratingService: RatingService,private router:ActivatedRoute) {
    this.id= Number(this.router.snapshot.paramMap.get('id'));
  }

  setRating(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
    console.log(" hello "+this.rating);

    if (this.rating > 0) {
      console.log("I am in save rating");
      this.ratingService.saveRating(this.id,this.rating)
        .subscribe(response => {
          // Handle the response from the server if needed
          console.log('Rating saved:', response);
        });
    }

  }
}
