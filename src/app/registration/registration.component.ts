import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { users } from '../model/user';

@Component({
  selector: 'ak-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // import users Model
  users!: users;
  regrForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regrForm.value);
    localStorage.setItem('users', JSON.stringify(this.userData()));
  }


  userData(): users {
    return this.users = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value
    }
  }

  // getter Methods for all forms controls

  get firstName() {
    return this.regrForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.regrForm.get('lastName') as FormControl;
  }

  get email() {
    return this.regrForm.get('email') as FormControl;
  }

  get password() {
    return this.regrForm.get('password') as FormControl;
  }
}
