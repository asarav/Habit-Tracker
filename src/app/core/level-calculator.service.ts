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
        var subdivisionCount = Math.floor(Math.sqrt(goalCount)) - 6;

        var totalGoals = goalCount;

        var subdivisions = [];

        while(totalGoals > 0) {
          if(totalGoals - subdivisionCount > 0) {
            subdivisions.push(subdivisionCount);
          } else {
            if(totalGoals <= 3) {
              if(subdivisions.length > 0) {
                subdivisions[0] += totalGoals;
                totalGoals = 0;
              } else {
                subdivisions.push(totalGoals);
                totalGoals = 0;
              }
            } else {
              var levelOne = Math.floor(totalGoals * (2/3));
              var levelTwo = totalGoals - levelOne;

              if(subdivisions.length > 1) {
                subdivisions[0] += levelOne;
                subdivisions[1] += levelTwo;
              } else {
                subdivisions.push(levelOne);
                subdivisions.push(levelTwo);
              }
            }
          }
        }

        //Any remainders will be added to the first and second sets depending on whether they are even or odd.
        for(var i = 1; i < subdivisions.length; i++) {
          if(subdivisions[i] % i > 0) {
            var remainder = subdivisions[i] % i;
          }
        }

      }
    });
  }
}
