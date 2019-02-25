import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaveNavService } from 'src/app/core/save-nav.service';
const DataStore = require('nedb')

@Component({
  selector: 'goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.less']
})
export class GoalsViewComponent implements OnInit {
  subscription:Subscription;
  userGoalsData;//Datastore
  dataReady = false;
  goalsData = '';//Text
  data;//Actual row in database

  constructor(private saveNavService: SaveNavService) {
    console.log(this);
    var that = this;
    this.userGoalsData = new DataStore({ filename: 'userGoalsData.data', autoload: true });
    console.log(1);
    console.log(this.userGoalsData);
    this.userGoalsData.findOne({ _id: 'goals' }, function(err, data) {
      console.log(data)
      console.log(that);
      if(data) {
        that.data = data;
        that.goalsData = data.data;
      }
      that.dataReady = true;
    });
  }

  ngOnInit() {
    this.subscription = this.saveNavService.saveItem$
       .subscribe(subscriptionData => {
         console.log(3);
         console.log(subscriptionData);
         if(this.dataReady) {
           console.log(4);
            this.saveData();
         }
       });
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.saveData();
    this.subscription.unsubscribe();
  }

  saveData() {
    if(this.dataReady) {
      this.userGoalsData.update({ _id: 'goals'},
      { _id: 'goals', data: this.goalsData },
      { upsert: true }, function() {
        console.log('Saved');
      });
    }
  }

}
