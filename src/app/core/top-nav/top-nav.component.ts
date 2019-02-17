import { Component, OnInit } from '@angular/core';

import { Remote } from 'electron';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {
  private remote: Remote | undefined;

  constructor() {
    if (window.require) {
      try {
        this.remote = window.require('electron').remote;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s Remote was not loaded');
    }
  }

  ngOnInit() {
  }

  close() {
    var window = this.remote.getCurrentWindow();
    window.close();
  }

}
