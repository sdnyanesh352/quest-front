import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {
  signupForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, public authService: AuthService){
  }
  ngOnInit(){
    this.signupForm=this.formBuilder.group({
      name:[''],
      email:['']
    })
  }

  onSubmit(){
    if(this.signupForm.valid){
      console.log( " sign up data :"+this.signupForm.value);
    }
  }



}
