import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/electron-utils/remote.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {
  remote = new RemoteService().remote;

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    var window = this.remote.getCurrentWindow();
    window.close();
  }

}
