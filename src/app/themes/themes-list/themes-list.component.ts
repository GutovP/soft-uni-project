import { Component, OnInit } from '@angular/core';

import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss'],
})
export class ThemesListComponent implements OnInit {
  themes: any;
  constructor(private themesService: ThemesService) {}

  ngOnInit(): void {
    this.loadThemes();
  }

  loadThemes() {
    return this.themesService.loadAllThemes().subscribe({
      next: (data) => {
        this.themes = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
