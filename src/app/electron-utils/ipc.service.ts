import { Injectable } from '@angular/core';
import { IpcRenderer, IpcMain } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  ipcRenderer: IpcRenderer | undefined;
  ipcMain: IpcMain | undefined;

  constructor() {
    if (window.require) {
      try {
        this.ipcRenderer = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
      try {
        this.ipcMain = window.require('electron').ipcMain;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s Ipc was not loaded');
    }
  }
}
