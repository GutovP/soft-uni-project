import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
