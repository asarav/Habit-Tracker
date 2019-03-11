import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaveNavService } from 'src/app/core/save-nav.service';
import { DataStoreService } from 'src/app/core/data-store.service';

@Component({
  selector: 'goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.less']
})
export class GoalsViewComponent implements OnInit {
  subscription:Subscription;
  goalsData;
  edit = false;

  constructor(private saveNavService: SaveNavService, private storage: DataStoreService) {
    this.goalsData = this.storage.getItem('goals');
    if(!this.goalsData) {
      this.goalsData = {};
    }
    if(!this.goalsData.goals || this.goalsData.goals.length <= 0) {
      this.edit = true;
      this.addGoal();
      this.addSubGoal(0);
    }
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
    this.storage.saveItem('goals', this.goalsData)
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
    this.goalsData.goals[goalIndex].splice(subGoalIndex, 1);
  }

  getLetterFromNumber(number) {
    return String.fromCharCode(97 + number);
  }

  toggleEdit() {
    this.edit = !this.edit;
    if(!this.edit) {
      this.saveData();
    }
  }

}
