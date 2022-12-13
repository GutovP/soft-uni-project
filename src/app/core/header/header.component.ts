import { Component, OnInit } from '@angular/core';
import { HeaderItems } from './header-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navbarCollapsed = true;
  headerItems: HeaderItems[] | undefined;

  authItems: HeaderItems[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.headerItems = [
      {
        caption: 'Home',
        path: 'home',
        link: ['/home'],
      },
      { caption: 'Themes', path: 'themes', link: ['/themes'] },
    ];

    this.authItems = [];
  }
}
