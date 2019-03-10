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

  constructor(private saveNavService: SaveNavService, private storage: DataStoreService) {
    this.goalsData = this.storage.getItem('goals');
    console.log(this.goalsData);
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
      goalNumber: this.goalsData.goalsCount
    });
  }

  removeGoal(index) {
    this.goalsData.goals.splice(index, 1)
  }

}
