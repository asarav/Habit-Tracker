import { Component, OnInit } from '@angular/core';

//remote = window.require('electron').remote;

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  close() {
    // var window = remote.getCurrentWindow();
    // window.close();
  }

}
