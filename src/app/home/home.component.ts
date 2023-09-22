
import { Component } from '@angular/core';

 

@Component({

  selector: 'app-home',

  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']

})

export class HomeComponent {

 

  data:number=35;

  name:string="Dnyaneshwar Somwanshi";

  isDisable:boolean=false;

  text = '';

username:string='';

  ngOnDestroy()

  {

    console.log("ngondestroy");

  }

  ngAfterViewChecked()

  {

    console.log("ngafterviewchecked");

  }

 

  constructor()

  {

    console.log('new data is' + this.data);

    setTimeout(()=>{

      this.isDisable=true;

    },7000)

 

   

  }

  ngOnChanges() //angular sets or resets data bound input properties

  {

    console.log("ng on changes data is" + this.data);

 

  }

  ngOnInit():void//intialize the directive or component after displays the data bound properties

  {

    console.log("ng onInitdata is" + this.data);

  }

  ngDoCheck()//detect and act upon changes

  {

    console.log("ngdocheck");

  }

  ngAfterContentInit()//respond external content into the component view

  {

    console.log("ngaftercontentinit");

  }

  ngAfterContentChecked() //respond after angular checks the content projects into the directive

  {

    console.log("ngaftercontentchecked");

  }

  ngAfterViewInit()

  {

    console.log("ngafterviewinit");

  }

 

 

  add()

  {

    this.data+=60;

    this.isDisable=true;

  }

  delete()

  {

    this.data-=30;

  }

  resetIt(){

    this.username='';
  }

 

}