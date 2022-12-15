import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemesMainComponent } from './themes-main/themes-main.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesMainComponent,
  },
  {
    path: 'new',
    component: NewThemeComponent,
  },
  {
    path: ':id',
    component: ThemeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
