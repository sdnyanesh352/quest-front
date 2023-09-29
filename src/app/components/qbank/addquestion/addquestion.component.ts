import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Qform } from 'src/app/alerts/model/qform';
import { QserviceService } from 'src/app/services/qservice.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent {
 
  question!:Qform[];
  qform!:FormGroup;
  formSubmitted:boolean=false;
  constructor(private ser:QserviceService){

  }
  ngOnInit():void{
    this.qform=new FormGroup({
      questionid:new FormControl(''),
      qanswer:new FormControl(''),
      companyname:new FormControl('')
    })

  }
  submit()

  {

    if(this.qform.valid)

    {

      console.log(this.qform.value);
      this.ser.save(this.qform.value).subscribe(data => {
        console.log("from contact comp form : "+data);
        if(data!=null){
          this.formSubmitted=true;
        }
        

      });

      //window.location.reload();

    }

  }

}
