import { Injectable } from '@angular/core';
import { Personaje } from '../modules/personaje.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private showData = new BehaviorSubject<Personaje>(new Personaje('', ''));
  currentData = this.showData.asObservable();
  setData(data: Personaje) {
    this.showData.next(data);
  }
  constructor() {}
}
