import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
