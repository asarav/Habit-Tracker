import { Component, OnInit } from '@angular/core';
import { SaveNavService } from 'src/app/core/save-nav.service';
import { DataStoreService } from 'src/app/core/data-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'quests-view',
  templateUrl: './quests-view.component.html',
  styleUrls: ['./quests-view.component.less']
})
export class QuestsViewComponent implements OnInit {
  guilds = [ { code: 'AD', name: 'Adventurers Guild' },
    { code: 'AR', name: 'Artists Guild' },
    { code: 'AS', name: 'Assassins Guild'},
    { code: 'BA', name: 'Bards Guild' },
    { code: 'GE', name: 'Gentlemens Guild' },
    { code: 'MA', name: 'Mages Guild' },
    { code: 'ME', name: 'Merchants Guild' }
  ];

  subscription:Subscription;
  questsData;
  edit = false;

  constructor(private saveNavService: SaveNavService, private storage: DataStoreService) {
    this.questsData = this.storage.getItem('quests');
    if(!this.questsData) {
      this.questsData = {};
    }
    if(!this.questsData.currentQuests || this.questsData.currentQuests.length <= 0) {
      this.questsData.currentQuests = [];
    }
    if(!this.questsData.pendingQuests) {
      this.questsData.pendingQuests = {};
      //Populate pendingQuests section
      this.guilds.forEach(function(guild) {
        this.questsData.pendingQuests[String(guild.code)] = [];
      });
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
    this.storage.saveItem('quests', this.questsData);
  }

}
