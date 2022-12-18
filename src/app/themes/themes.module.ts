import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemesListComponent } from './themes-list/themes-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesMainComponent } from './themes-main/themes-main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

@NgModule({
  declarations: [
    ThemesListComponent,
    RecentPostsComponent,
    ThemesMainComponent,
    NewThemeComponent,
    ThemeDetailsComponent,
  ],
  imports: [CommonModule, ThemesRoutingModule, ReactiveFormsModule],
})
export class ThemesModule {}
