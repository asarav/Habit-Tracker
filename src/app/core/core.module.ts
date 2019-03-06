import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from './nav-item/nav-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [NavItemComponent, TopNavComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavItemComponent,
    TopNavComponent,
  ]
})
export class CoreModule { }
