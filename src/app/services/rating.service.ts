import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private baseUrl = 'http://localhost:8083/api'; // Replace with your backend API URL
  
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Save a rating for a question
  saveRating(questionId: number, rating: number): Observable<any> {

    const url = `${this.baseUrl}/ratings/${questionId}/${rating}`; // Update with your API endpoint
  
  return this.http.post(url, null,this.httpOptions);
  
  }

  // Retrieve ratings for a question
  getRatings(questionId: number): Observable<any> {
    const url = `${this.baseUrl}/ratings/${questionId}`; // Replace with your API endpoint
    return this.http.get(url);
  }

  // Calculate the average rating for a question
  calculateAverageRating(ratings: number[] | undefined): number {
    if (!ratings || ratings.length === 0) {
      return 0; // Handle the case when ratings is undefined or empty.
    }
  
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length;
  
    return average;
  }
  
}
