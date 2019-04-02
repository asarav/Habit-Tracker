import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaveNavService } from 'src/app/core/save-nav.service';
import { DataStoreService } from 'src/app/core/data-store.service';
import { LevelCalculatorService } from 'src/app/core/level-calculator.service';

@Component({
  selector: 'goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.less']
})
export class GoalsViewComponent implements OnInit {
  subscription:Subscription;
  goalsData;
  edit = false;
  formInvalid = false;
  currentLevel = 0;
  maxLevel = 0;

  constructor(private saveNavService: SaveNavService, private storage: DataStoreService, private levelCalculator: LevelCalculatorService) {
    this.goalsData = this.storage.getItem('goals');
    if(!this.goalsData) {
      this.goalsData = {};
    }
    if(!this.goalsData.goals || this.goalsData.goals.length <= 0) {
      this.edit = true;
      this.addGoal();
      this.addSubGoal(0);
    }
    this.setLevelData();
  }

  ngOnInit() {
    this.subscription = this.saveNavService.saveItem$
       .subscribe(subscriptionData => {
         this.saveData();
       });
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.saveData();
    this.subscription.unsubscribe();
  }

  saveData() {
    this.storage.saveItem('goals', this.goalsData);
    this.setLevelData();
  }

  addGoal() {
    if(!this.goalsData.goals) {
      this.goalsData.goals = [];
    }
    if(!this.goalsData.goalsCount) {
      this.goalsData.goalsCount = 0;
    }

    this.goalsData.goalsCount++;

    this.goalsData.goals.push({
      content: '',
      dateOfCreation: new Date(),
      completed: false,
      guild: '',
      goalNumber: this.goalsData.goalsCount,
      subGoalsCount: 1,
      subGoalsData: []
    });
  }

  removeGoal(index) {
    this.goalsData.goalsCount--;
    this.goalsData.goals.splice(index, 1)
  }

  addSubGoal(index) {
    if(this.goalsData.goals[index].subGoalsCount) {
      this.goalsData.goals[index].subGoalsCount++;
    } else {
      this.goalsData.goals[index].subGoalsCount = 1;
      this.goalsData.goals[index].subGoalsData = [];
    }

    this.goalsData.goals[index].subGoalsData.push({
      content: '',
      dateOfCreation: new Date(),
      completed: false,
      subGoalNumber: this.goalsData.goals[index].subGoalsCount
    });
  }

  removeSubGoal(goalIndex, subGoalIndex) {
    this.goalsData.goals[goalIndex].subGoalsCount--;
    this.goalsData.goals[goalIndex].subGoalsData.splice(subGoalIndex, 1);
  }

  getLetterFromNumber(number) {
    return String.fromCharCode(97 + number);
  }

  toggleEdit() {
    if(this.edit && this.validateForm()) {
      //Show error if invalid on edit
      this.formInvalid = true;
    } else{
      this.formInvalid = false;
      this.edit = !this.edit;
      if(!this.edit) {
        this.saveData();
      }
    }
  }

  //Returns false if vald. True if invalid.
  validateForm() {
    for(var i = 0; i < this.goalsData.goals.length; i++) {
      if(!this.goalsData.goals[i].content) {
        return true;
      } else {
        for(var j = 0; j < this.goalsData.goals[i].subGoalsData.length; j++) {
          if(!this.goalsData.goals[i].subGoalsData[j].content) {
            return true;
          }
        }
      }
    }
    return false;
  }

  checkboxChanged(goalIndex) {
    //Checkboxes should be the only changeable aspect of the UI in view mode.
    //TODO: Do not allow for goals to be marked as completed if subgoals are not marked as completed.
    if(!this.edit) {
      this.saveData();
    }
  }

  setLevelData() {
    this.currentLevel = this.levelCalculator.getLevelData().currentLevel;
    this.maxLevel = this.levelCalculator.getLevelData().maxLevel;
  }
}
