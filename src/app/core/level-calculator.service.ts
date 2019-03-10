import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelCalculatorService {
  currentLevel = 0;
  maxLevel = 0;
  levelBreakdown = {};

  constructor(goals) {
    if(goals) {
      this.calculateLevelData(goals);
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

    var denominator = 3;
    //TODO: Calculate level breakdown to determine max number of levels.
  }
}
