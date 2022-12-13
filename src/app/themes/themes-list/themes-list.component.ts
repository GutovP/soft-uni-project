import { Component, OnInit } from '@angular/core';

import { Theme } from '../../core/models/theme';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | undefined;

  constructor(private themesService: ThemesService) {}

  ngOnInit(): void {
    this.loadThemes();
  }

  loadThemes() {
    return this.themesService.loadAllThemes().subscribe({
      next: (data) => {
        this.themes = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        this.themes = err;
      },
    });
  }
}
