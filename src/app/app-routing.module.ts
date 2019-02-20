import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsViewComponent } from './goals/goals-view/goals-view.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { QuestsViewComponent } from './quests/quests-view/quests-view.component';
import { AchievementsViewComponent } from './achievements/achievements-view/achievements-view.component';
import { HelpViewComponent } from './help/help-view/help-view.component';
import { OptionsViewComponent } from './options/options-view/options-view.component';

const routes: Routes = [
  {
    path: 'goals',
    component: GoalsViewComponent
  },
  {
    path: 'profile',
    component: ProfileViewComponent
  },
  {
    path: 'quests',
    component: QuestsViewComponent
  },
  {
    path: 'achievements',
    component: AchievementsViewComponent
  },
  {
    path: 'help',
    component: HelpViewComponent
  },
  {
    path: 'options',
    component: OptionsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
