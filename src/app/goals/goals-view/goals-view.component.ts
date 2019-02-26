import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaveNavService } from 'src/app/core/save-nav.service';
const os = require('os');

@Component({
  selector: 'goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.less']
})
export class GoalsViewComponent implements OnInit {
  subscription:Subscription;
  goalsData = '';//Text
  storage;

  constructor(private saveNavService: SaveNavService) {
    this.storage = window.localStorage;
    this.goalsData = this.storage.getItem('goals');
    console.log(this.storage);
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
    this.storage.setItem('goals', this.goalsData);
    console.log(this.storage);
  }

}
