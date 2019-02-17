import { Injectable } from '@angular/core';
import { Remote } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  public remote: Remote | undefined;

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
}
