import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserLoginTimeService {

  lastLoginDate: any;
  currentDate = new Date();
  formattedCurrentDate = this.currentDate.toISOString();

  constructor(
    private cookieService: CookieService,
    private fireAuthService: AngularFireAuth,
    private fireStoreService: AngularFirestore,
  ) {
  }

  checkUserlastLoginTime() {
    this.lastLoginDate = this.cookieService.get('lastLoginDate');

    if (!this.lastLoginDate) {
      this.cookieService.set('lastLoginDate', this.formattedCurrentDate);
      this.updateUserloginTime()
    } else {
      this.compareUserlastLoginTime();
    }
  }

  compareUserlastLoginTime() {
    const lastLoginDate = this.cookieService.get('lastLoginDate');
    if (lastLoginDate) {
      const currentDate = new Date();
      const savedDate = new Date(lastLoginDate);
      const timeDifference = currentDate.getTime() - savedDate.getTime();
      const hoursDifference = timeDifference / (1000 * 3600);

      if (hoursDifference > 48) {
        this.cookieService.set('lastLoginDate', this.formattedCurrentDate);
        this.updateUserloginTime();
      }
    }
  }

  updateUserloginTime() {
    this.fireAuthService.authState.subscribe(user => {
      if (user) {
        const uid = user.uid;
        const userRef = this.fireStoreService.collection('Users').doc(uid);
        userRef.update({lastLoginTime: this.formattedCurrentDate})}
    });

  }

}
