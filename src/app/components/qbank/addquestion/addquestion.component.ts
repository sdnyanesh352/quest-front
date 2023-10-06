import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Qform } from 'src/app/alerts/model/qform';
import { MyserviceService } from 'src/app/services/myservice.service';
import { QserviceService } from 'src/app/services/qservice.service';
import { Company } from '../../../alerts/model/company.model'; // Import the Company model

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent {
 
  question!:Qform[];
  qform!:FormGroup;
  formSubmitted:boolean=false;
  selectedOption: string = ''; // Variable to store the selected option
  customCompany: string = ''; // Variable to store custom input
  companyOptions: string[] = [];

  
  constructor(private myserv:MyserviceService,  private ser:QserviceService,private formBuilder:FormBuilder,private http: HttpClient){

  }
  ngOnInit():void{
    this.qform = this.formBuilder.group({
      questionid: '',
      qanswer: '',
      companyname: '',
      customCompany: ''
    });
    //console.log(this.fetchCompanyOptions());
    this.fetchCompanyOptions();
  }
  fetchCompanyOptions() {
    const apiUrl = 'http://localhost:3000/companies';

    this.http.get<any>(apiUrl).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          // Extract company names from the JSON file and add 'Other' as an option
          const companies: Company[] = data; // Parse companies as an array of Company
          this.companyOptions = companies.map((company) => company.companyName);
          this.companyOptions.push('Other');
        } else {
          console.error('Invalid data format received from the API.');
        }
      },
      (error) => {
        console.error('Error fetching company options:', error);
      }
    );
  }

  
  isOtherSelected() {
    return this.qform.get('companyname')?.value === 'Other';
  }
  submit() {
    if (this.qform.valid) {
      if (this.isOtherSelected()) {
        // Set the "companyname" field to the value of "customCompany"
        this.qform.get('companyname')?.setValue(this.qform.get('customCompany')?.value);
        const customCompany = this.qform.get('customCompany')?.value;

        // Make a POST request to update the JSON data
        const apiUrl = 'http://localhost:3000/companies';
        this.http.post(apiUrl, { companyName: customCompany }).subscribe(
          (response) => {
            // Handle the response if needed
          },
          (error) => {
            console.error('Error updating company data:', error);
          }
        );
      }
  
      console.log(this.qform.value);
      this.ser.save(this.qform.value).subscribe(data => {
        console.log("from contact comp form : " + data);
        if (data != null) {
          this.formSubmitted = true;
        }
      });
    }
  }
  

}
