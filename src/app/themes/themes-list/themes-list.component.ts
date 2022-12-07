import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss'],
})
export class ThemesListComponent implements OnInit {
  themes: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  loadThemes() {
    return this.apiService.loadAllThemes().subscribe({
      next: (data) => {
        this.themes = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
