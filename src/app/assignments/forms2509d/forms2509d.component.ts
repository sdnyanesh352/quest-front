import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { EmployeeForm } from '../../alerts/model/employeeForm';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms2509d',
  templateUrl: './forms2509d.component.html',
  styleUrls: ['./forms2509d.component.css']
})
export class Forms2509dComponent {
  emp!:EmployeeForm[];

  empform!:FormGroup;

  namepattern="^[a-zA-Z ]{2,15}$";
  emailpattern="^[a-zA-Z ]+@[a-zA-Z]+\.[a-zA-Z]{2,}$";
  isSubmitted = false;
  City: any = ['Stable', 'Critical', 'Finished'];
 


  constructor(private fb:FormBuilder)

  {

 

  }

  ngOnInit():void{

    this.empform=this.fb.group(

      {

        projectName:['',[Validators.required,Validators.pattern(this.namepattern)]],

        email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
        cityName:['',[Validators.required]]

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

  changeCity(e: any) {
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get cityName() {
    return this.empform.get('cityName');
  }


}
