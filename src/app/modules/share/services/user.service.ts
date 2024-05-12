import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {SnackBarService} from "./snack-bar.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {UserDto} from "../dto/userDto";
import firebase from "firebase/compat/app";
import {catchError, combineLatest, finalize, forkJoin, from, Observable, of, switchMap} from "rxjs";
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {UserProfileDto} from "../dto/userProfileDto";
import {User} from '@firebase/auth';
import {FormGroup} from "@angular/forms";
import {LoadingService} from './loading.service';
import {error} from "@angular/compiler-cli/src/transformers/util";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router,
              private snackBarService: SnackBarService,
              private fireAuthService: AngularFireAuth,
              private fireStoreService: AngularFirestore,
              private cookieService: CookieService) {
  }

  public signIn(email: any, password: any, rememberMe: boolean) {
    this.fireAuthService.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (firebase.auth().currentUser?.emailVerified) {
          if (userCredential && userCredential.user) {
            const currentUser: any = userCredential.user;
            const loginTime: string = new Date().toISOString();
            this.updateLoginTime(currentUser.uid, loginTime);
            const adminEmail: string = "admin@gmail.com";
            const redirectTo = (email === adminEmail) ? "/console" : "/dashboard";
            this.router.navigateByUrl(redirectTo).then(() => {
              if (rememberMe) {
                this.handleRememberMe(email);
              }
            });
            this.setUserData(email);
          } else {
            return this.snackBarService.snackBar("Invalid email or password", "close", 5000, 'ltr', 'center', 'top');
          }
        } else {
          return this.snackBarService.snackBar("Email not verified", "close", 5000, 'ltr', 'center', 'top');
        }
      }).catch((error) => {
      return this.snackBarService.snackBar("Error, Please Try Again", "close", 5000, 'ltr', 'center', 'top');
    });
  }

  private handleRememberMe(email: string) {
    this.cookieService.set('rememberMeToken', email, {
      expires: 7,
      secure: true
    });
  }


  isAdminUser() {
    return this.cookieService.get('isAdmin')
  }

  setUserData(email: string) {
    this.getUserByEmail(email).subscribe(userDataArray => {
      if (userDataArray && userDataArray.length > 0) {
        const userData = userDataArray[0];
        this.cookieService.set("isAdmin", userData.isAdminUser);
        if (this.cookieService.get('userEmail') != email) {
          this.cookieService.set("userAvatar", userData.avatar ? userData.avatar : '');
          this.cookieService.set("userEmail", userData.email);
          this.cookieService.set("userFullName", userData.fullName ? userData.fullName : '');
          this.cookieService.set("userPhone", userData.phone ? userData.phone : '');
        }
      }
    });
  }

  deleteUserDataInCookie() {
    this.cookieService.delete('userEmail');
    this.cookieService.delete('userAvatar');
    this.cookieService.delete('userFullName');
    this.cookieService.delete('userPhone');
    this.cookieService.delete('userSentencePatternsBookArray');
    this.cookieService.delete('userFreeBookArray');
    this.cookieService.delete('userDialoguesBookArray');
    this.cookieService.delete('userGrammarBookArray');
    this.cookieService.delete('lastLoginDate');
    this.cookieService.delete('isAdmin');

  }

  private updateLoginTime(uid: string, loginTime: string) {
    return this.fireStoreService.collection("Users").doc(uid).update({loginTime: loginTime});
  }



  public signUp(
    email: any,
    password: any,
    fullName: any,
    phone: any,
  ) {
    this.fireAuthService.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const currentUser: any = userCredential.user;
        let uid: any = currentUser?.uid;
        const currentDate: string = new Date().toISOString().split('T')[0];
        const userDto: UserDto = {
          email: email,
          fullName: fullName,
          phone: phone,
          activeState: true,
          lifeTimeSubscriber: false,
          yearlySubscriber: false,
          shortTimeSubscriber: false,
          payment: 0,
          paymentDate: currentDate,
          isAdminUser: false,
          isUser: true,
          loginTime: null,
          avatar: null
        };
        currentUser?.sendEmailVerification().then(() => {
          this.createUser(userDto, uid);
          this.router.navigateByUrl("/security/login").then(() => {
            this.snackBarService.snackBar("Registration Successful", "close", 2000, 'ltr', 'center', 'top');
            setTimeout(() => {
              this.snackBarService.snackBar("User Verification Email Sent. Check Your Email", "close", 10000, 'ltr', 'center', 'top');
            }, 2000);
          });
        });
      }).catch((error) => {
      this.snackBarService.snackBar("Registration Unsuccessful. Please Try Again", "close", 5000, 'ltr', 'center', 'top');
    });
  }


  private createUser(user: UserDto, uid: string) {
    this.fireStoreService.collection("Users").doc(uid).set(user).then(() => {}).catch((error) => {});
  }

  private isAuthenticated(): boolean {
    return this.fireAuthService.currentUser !== null;
  }

  private sendEmailVerification() {
    let auth = firebase.auth();
    return auth.currentUser?.sendEmailVerification();
  }

  public resendVerificationEmail(email: any) {
    this.getUserByEmail(email).subscribe(response => {
      if (response.length > 0) {
        if (this.isAuthenticated()) {
          this.sendEmailVerification()?.then(() => {
            console.log("Success")
            this.snackBarService.snackBar("Verification Email Successfully Sent to Your Email", "close", 5000, 'ltr', 'center', 'top');
            setTimeout(() => {
              this.snackBarService.snackBar("Please Check Your Email And Verify Your Account", "close", 7000, 'ltr', 'center', 'top');
            }, 5000);
          });
        } else {
          console.log("authenticated")
          this.snackBarService.snackBar("You Are Authenticated", "close", 5000, 'ltr', 'center', 'top');
        }
      } else {
        console.log("Email Error")
        this.snackBarService.snackBar("Incorrect Email, Try Again", "close", 5000, 'ltr', 'center', 'top');
      }
    });
  }


  public logOut() {
    this.fireAuthService.signOut().then(() => {
      this.router.navigateByUrl('/security/login').then(() => {
        this.snackBarService.snackBar("Come Again", "close", 5000, 'ltr', 'center', 'top');
      })
      this.deleteUserDataInCookie();
    });
  }

  public forgotPassword(email: any) {
    this.fireAuthService.sendPasswordResetEmail(email).then(() => {
      this.snackBarService.snackBar("Password Reset Email Send SuccessFully", "close", 5000, 'ltr', 'center', 'top');
    }).catch(error => {
      this.snackBarService.snackBar("Error Try Again", "close", 5000, 'ltr', 'center', 'top');
    })

  }

  getAllUsers(): Observable<any[]> {
    return this.fireStoreService.collection('Users')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }

  getAllSubscribedUsers(): Observable<any[]> {
    return this.fireStoreService.collection('Users')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data: any = action.payload.doc.data();
            const id = action.payload.doc.id;
            if (data.shortTimeSubscriber || data.yearlySubscriber || data.lifeTimeSubscriber) {
              return {id, ...data as any};
            }
            return null;
          }).filter(user => user !== null);
        })
      );
  }

  getUserByEmail(email: string): Observable<any[]> {
    return this.fireStoreService.collection('Users', ref =>
      ref.where('email', '>=', email)
        .where('email', '<=', email + '\uf8ff')
        .orderBy('email')
    )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }

  getAllUsersByRecentLogin(): Observable<any[]> {
    const recentLoginTimeframe = new Date();
    recentLoginTimeframe.setDate(recentLoginTimeframe.getDate() - 2);
    return this.fireStoreService.collection('Users', ref =>
      ref.where('loginTime', '>=', recentLoginTimeframe.toISOString())
        .orderBy('loginTime','desc')
    ).snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }

  getAllUsersCount(): Observable<number> {
    return this.fireStoreService.collection('Users', ref =>
      ref.where('isUser', '==', true))
      .get()
      .pipe(map(snapshot => snapshot.size));
  }

  public updateUserProfile(userProfile: UserProfileDto, id: string) {
    this.fireStoreService.collection("Users").doc(id).update(userProfile).then(() => {
    }).catch((error) => {
    })
  }

}
