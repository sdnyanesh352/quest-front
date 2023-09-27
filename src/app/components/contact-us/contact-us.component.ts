import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeForm } from '../../alerts/model/employeeForm';
import { MyserviceService } from '../../myservice.service';

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

  constructor(private fb:FormBuilder,private ser:MyserviceService)

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
      this.ser.save(this.empform.value).subscribe(data => {
        console.log("from contact comp form : "+data);
      });

      //window.location.reload();

    }

  }
 

}
