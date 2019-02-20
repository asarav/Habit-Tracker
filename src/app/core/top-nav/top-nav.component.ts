import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/electron-utils/remote.service';
import { remote } from 'electron';
import { Router } from '@angular/router';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {
  remote = new RemoteService().remote;
  win = this.remote.getCurrentWindow();

  constructor(private router: Router) {}


  ngOnInit() {
  }

  openDevTools() {
    this.win.webContents.openDevTools();
  }

  minimize() {
    var window = this.remote.getCurrentWindow();
    window.minimize();
  }

  maximize() {
    var window = this.remote.getCurrentWindow();
    window.isMaximized() ? window.unmaximize() : window.maximize();
  }

  close() {
    var window = this.remote.getCurrentWindow();
    window.close();
  }

  gotoHelp() {
    this.router.navigate(['help']);
  };

  gotoOptions() {
    this.router.navigate(['options']);
  }

}