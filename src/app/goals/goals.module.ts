import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsViewComponent } from './goals-view/goals-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GoalsViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GoalsModule { }
