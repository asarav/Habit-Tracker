import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/electron-utils/remote.service';
import { Router } from '@angular/router';
import { SaveNavService } from '../save-nav.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {
  remote = new RemoteService().remote;
  win = this.remote.getCurrentWindow();

  constructor(private router: Router, private saveNavService:SaveNavService) {}


  ngOnInit() {
  }

  openDevTools() {
    this.win.webContents.openDevTools();
  }

  save() {
    this.saveNavService.saveData('saving');
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
