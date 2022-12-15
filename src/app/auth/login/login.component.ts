import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'path';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private actuvatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  loginHandler(): void {
    this.authService.user = {
      username: 'John',
    } as any;
    const returnUrl = this.actuvatedRoute.snapshot.params['/auth/login'];
    this.router.navigate([returnUrl]);
  }
  get f() {
    return this.loginForm.controls;
  }
}
