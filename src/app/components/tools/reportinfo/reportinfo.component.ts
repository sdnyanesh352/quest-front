import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reportinfo',
  templateUrl: './reportinfo.component.html',
  styleUrls: ['./reportinfo.component.css']
})
export class ReportinfoComponent {
  isSubmitted = false;
  Issue: any = ['Question is wrongly answered', 'Wrong category', 'Too easy', 'Abusive'];
  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    issueName: ['', [Validators.required]],
  });
  changeIssue(e: any) {
    this.issueName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get issueName() {
    return this.registrationForm.get('issueName');
  }
  onSubmit(): void {
    console.log(this.registrationForm);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }
}
