import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemesMainComponent } from './themes-main/themes-main.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
