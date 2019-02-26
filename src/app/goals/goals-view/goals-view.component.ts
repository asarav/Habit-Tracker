import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaveNavService } from 'src/app/core/save-nav.service';

@Component({
  selector: 'goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.less']
})
export class GoalsViewComponent implements OnInit {
  subscription:Subscription;
  goalsData = '';//Text

  constructor(private saveNavService: SaveNavService) {
  }

  ngOnInit() {
    this.subscription = this.saveNavService.saveItem$
       .subscribe(subscriptionData => {
       });
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.saveData();
    this.subscription.unsubscribe();
  }

  saveData() {
  }

}
