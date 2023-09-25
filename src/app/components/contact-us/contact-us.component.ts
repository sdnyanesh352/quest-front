import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeForm } from '../../components/model/employeeform';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  emp!:EmployeeForm[];

  empform!:FormGroup;

  namepattern="^[a-zA-Z ]{2,15}$";
  lastnamepattern="^[a-zA-Z ]{2,15}$";

  constructor(private fb:FormBuilder)

  {

 

  }

  ngOnInit():void{

    this.empform=this.fb.group(

      {

        firstName:['',[Validators.required,Validators.pattern(this.namepattern)]],

        lastName:['',[Validators.required,Validators.pattern(this.lastnamepattern)]]

      }

    )

  }

  submit()

  {

    if(this.empform.valid)

    {

      console.log(this.empform.value);

    }

  }
 

}
