import { Component } from '@angular/core';
import { EmployeeForm } from '../../alerts/model/employeeForm';
import { MyserviceService} from '../../myservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  emp!:EmployeeForm[];

  constructor(private cs:MyserviceService)

  {

 

  }

  ngOnInit():void{

 

    this.cs.getData().subscribe(

      list=>{this.emp=list;}

 

    );

  }

}
