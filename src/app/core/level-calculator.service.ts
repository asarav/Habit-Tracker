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
    var maxLevel = 0;
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

      //For now, require for there to be at least 100 goals and subgoals. Anything lower will have the number of levels equal the number of goals
      if(goalCount < 100) {
        maxLevel = 0;
      } else {
        //The number of subdivisions will be the closest square root subtracting 6. These subdivisions represent the number of goals allocated to each set of levels.
        //The first set will require 1 goal per level. The next will be 2 and so on.

        //Any remainders will be added to the first and second sets depending on whether they are even or odd.
      }
    });
  }
}
