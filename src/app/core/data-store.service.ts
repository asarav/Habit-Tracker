import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  storage;
  storageSet = false;

  constructor() {
    this.storage = window.localStorage;
    this.storageSet = true;
  }

  getItem(key: string) {
    var item = this.storage.getItem(key);
    try {
      return JSON.parse(item);
    } catch(e) {
      console.log(e);
      return item;
    }
  }

  saveItem(key: string, item) {
    this.storage.setItem(key, JSON.stringify(item));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
