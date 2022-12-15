import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-themes-main',
  templateUrl: './themes-main.component.html',
  styleUrls: ['./themes-main.component.scss'],
})
export class ThemesMainComponent implements OnInit {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
