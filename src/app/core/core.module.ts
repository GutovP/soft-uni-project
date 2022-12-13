import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SpinnerComponent],
  imports: [
    CommonModule, // so we can use ngFor
    RouterModule, // so we can use <router-outlet> and routerLink
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
