import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesListComponent } from './themes-list/themes-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesMainComponent } from './themes-main/themes-main.component';

@NgModule({
  declarations: [
    ThemesListComponent,
    RecentPostsComponent,
    ThemesMainComponent,
  ],
  imports: [CommonModule, ThemesRoutingModule],
})
export class ThemesModule {}
