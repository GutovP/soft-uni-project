import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';
import { HeaderItems } from './header-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navbarCollapsed = true;
  headerItems: HeaderItems[] | undefined;
  unAuthItems: HeaderItems[] | undefined;
  authItems: HeaderItems[] | undefined;

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.headerItems = [
      { caption: 'Home', path: 'home', link: ['/home'] },
      { caption: 'Themes', path: 'themes', link: ['/themes'] },
    ];

    this.unAuthItems = [
      { caption: 'Login', path: 'login', link: ['/auth/login'] },
      { caption: 'Register', path: 'register', link: ['/auth/register'] },
    ];

    this.authItems = [
      { caption: 'Profile', path: 'profile', link: ['/auth/profile'] },
      { caption: 'Logout', path: 'logout', link: ['/auth/logout'] },
    ];
  }
}
