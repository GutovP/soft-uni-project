import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { emailDomains } from 'src/app/shared/constants';
import {
  emailValidator,
  passwordGoupValidator,
} from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  prefix: any;
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(emailDomains)]],
    prefix: [''],
    tel: [''],
    pass: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(4)]],
        rePassword: [''],
      },
      {
        validators: [passwordGoupValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getPrefix();
  }

  registerHandler() {
    if (this.registerForm.invalid) { return; }
    const { username, email, pass: { password, rePassword }, tel } = this.registerForm.value;
    this.authService.register(username!, email!, password!, rePassword!, tel || undefined)
      .subscribe(user => {
        this.router.navigate(['/themes']);
      });
  }
  getPrefix() {
    this.authService.getAllPrefix().subscribe({
      next: (data) => {
        this.prefix = data;
      },
      error: (err) => {
        console.log(err);
        this.prefix = err;
      },
    });
  }
}
