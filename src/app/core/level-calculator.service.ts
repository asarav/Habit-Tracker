import { Injectable } from '@angular/core';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class LevelCalculatorService {
  currentLevel = 0;
  maxLevel = 0;
  levelBreakdown = {};

  constructor(private storage: DataStoreService) {
    var goalData = storage.getItem('goals');
    if(goalData && goalData.goals) {
      this.calculateLevelData(goalData);
    }
  }

  calculateLevelData(data) {
    var goalCount = 0;
    var completedGoalCount = 0;
    data.goals.array.forEach(goal => {
      goalCount++;
      if(goal.completed) {
        completedGoalCount++;
      }
      goal.subGoalsData.array.forEach(subgoal => {
        goalCount++;
        if(subgoal.completed) {
          completedGoalCount++;
        }
      });
    });

    //TODO: Calculate level breakdown to determine max number of levels.
    //Levels will require more completed goals as levels increase. We plan on using a series of exponential figures starting at 3^1.8 if the number of goals is above 50.
    //We will use an exponent of 1.5 for lower amounts.
    //E.g., total goals = 3^1.8 + 4^1.8 + 5^1.8 + ...
    //experience count 1 will use 3^1.8 and so on. Initially it will be easier to level up because the experience count requirement is lower.
    //However, difficulty will rise as experience count increases.

    //https://gamedev.stackexchange.com/questions/13638/algorithm-for-dynamically-calculating-a-level-based-on-experience-points
  }
}
