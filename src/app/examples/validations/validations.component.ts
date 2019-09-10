import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Profile } from '../templatedriven/profile';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {

  profileForm: FormGroup;
  model = new Profile("Ravi", "Ch");
  
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.maxLength(10)]),
    });
  }
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
}
