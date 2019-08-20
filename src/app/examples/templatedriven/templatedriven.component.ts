import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  model = new Profile("Ravi", "Ch");

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 

  }

  showFormControls(form: any) {
    let fn = form && form.controls['firstName'] && form.controls['firstName'].value;
    let ln = form && form.controls['lastName'] && form.controls['lastName'].value;
    
    return fn + ln;
  }
}
