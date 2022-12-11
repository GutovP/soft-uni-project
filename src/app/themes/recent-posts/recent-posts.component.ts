import { Component, OnInit } from '@angular/core';

import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss'],
})
export class RecentPostsComponent implements OnInit {
  posts: any;
  constructor(private themesService: ThemesService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.themesService.loadAllPosts(5).subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        console.log('Somethings went wrong');
      },
    });
  }
}
