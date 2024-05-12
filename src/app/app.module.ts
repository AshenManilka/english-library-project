import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './modules/security/app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environments} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {SnackBarService} from "./modules/share/services/snack-bar.service";
import {UserService} from "./modules/share/services/user.service";
import {MatNativeDateModule} from "@angular/material/core";
import { AuthGuard } from './modules/share/guard/auth.guard';
import {AsyncPipe} from "@angular/common";
import { ShareModule } from './modules/share/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatNativeDateModule,
    AsyncPipe,
    ShareModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
