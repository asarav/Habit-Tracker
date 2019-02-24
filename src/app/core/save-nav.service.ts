import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveNavService {
    // Observable saveItem source
    private _saveSubject = new BehaviorSubject<string>('saved');
    
    // Observable saveItem stream
    saveItem$ = this._saveSubject.asObservable();

    // service command
    saveData(data) {
      this._saveSubject.next(data);
    }
}
