import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarState = new BehaviorSubject<string>('default');

  constructor() { }

  getNavbarState() {
    return this.navbarState.asObservable();
  }

  setNavbarState(state: string) {
    this.navbarState.next(state);
  }

  resetNavbarState() {
    this.navbarState.next('default');
  }

}
