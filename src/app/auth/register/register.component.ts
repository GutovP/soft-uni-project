import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: [''],
    email: [''],
    prefix: [''],
    tel: [''],
    pass: this.fb.group(
      {
        password: [''],
        rePassword: [''],
      },
      {
        validators: [],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
