import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';



@NgModule({
  declarations: [
    ThemesListComponent,
    RecentPostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemesModule { }
