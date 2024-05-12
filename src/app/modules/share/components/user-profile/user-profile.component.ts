import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialogRef, MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserProfileDto} from "../../dto/userProfileDto";
import { CookieService } from 'ngx-cookie-service';
import { LoadingService } from '../../services/loading.service';
import { SnackBarService } from '../../services/snack-bar.service';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  form: FormGroup;
  loggedInUser: any;
  avatarForm!: FormGroup;
  avatar: any;
  fileSelected : boolean = false;

  constructor(
    private cookieService:CookieService,
    private userService: UserService,
    private fireAuthService: AngularFireAuth,
    private loadingService:LoadingService,
    private snackBarService:SnackBarService,
    private fireStorageService:AngularFireStorage,
    public dialogRef: MatDialogRef<UserProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {
    this.form = new FormGroup({
      avatar: new FormControl(""),
      email: new FormControl(''),
      fullName: new FormControl(''),
      phone: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.loadingService.showLoading();
    this.fireAuthService.authState.subscribe(user => {
      if (user) {
        this.loggedInUser = user;
        this.patchUserData();
      }
    });
  }

  patchUserData(): void {

    if (this.loggedInUser) {
      this.userService.getUserByEmail(this.loggedInUser.email).subscribe(userDataArray => {
        if (userDataArray && userDataArray.length > 0) {
          const userData = userDataArray[0];
          this.avatar = this.cookieService.get('userAvatar');
          // console.log('cookie avatar :' + this.avatar);
          // console.log('downloaded avatar:' + userData.avatar );

          this.form.patchValue({
            email: userData.email,
            fullName: userData.fullName ? userData.fullName : '',
            phone: userData.phone ? userData.phone : ''
          });
        }
      });
      this.loadingService.hideLoading();
    }

  }



  submitForm(): void {
    this.loadingService.showLoading();
    let uid = this.loggedInUser.uid;
     let avatar = this.form.get('avatar')?.value;
    let email = this.form.get('email')?.value;
    let fullName = this.form.get('fullName')?.value;
    let phone = this.form.get('phone')?.value;

    // console.log('form avatar '+ avatar)
    this.cookieService.set("userEmail", email );
    this.cookieService.set("userFullName",fullName ? fullName : '');
    this.cookieService.set("userPhone",phone ? phone : '');

    const userProfile:UserProfileDto={
      avatar: avatar,
      email:email,
      fullName:fullName,
      phone:phone
    };
    this.updateUserAvatarAndProfile(uid,userProfile,this.fileSelected);

  }


  public async updateUserAvatarAndProfile(id: any, userProfileDto: UserProfileDto , fileSelected:boolean): Promise<void> {
    try {

      let previewImageUrl;

      if(fileSelected){
        const  previewImageRef = this.fireStorageService.ref(`avatarResources/${userProfileDto.fullName}`);
        const   previewImageTask = previewImageRef.put(userProfileDto.avatar);
        const  previewImageSnapshot = await previewImageTask;
         previewImageUrl = await previewImageSnapshot.ref.getDownloadURL();
        }
        else{
          previewImageUrl = this.cookieService.get('userAvatar')
        }


      // console.log('priview image URL :' + previewImageUrl);
      this.cookieService.set("userAvatar", previewImageUrl );

      const userProfile: UserProfileDto = {
        avatar: previewImageUrl,
        email: userProfileDto.email,
        fullName: userProfileDto.fullName,
        phone: userProfileDto.phone,
      };
      this.userService.updateUserProfile(userProfile, id);
      this.loadingService.hideLoading();
      this.snackBarService.snackBar("Avatar Updated Successfully", "close", 5000, 'ltr', 'center', 'top');
      this.closeDialog();
    } catch (error) {

      console.error("Error updating Avatar:", error);
      this.snackBarService.snackBar("Error Updating The Avatar", "close", 5000, 'ltr', 'center', 'top');
      this.loadingService.hideLoading();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.form.get('avatar')?.setValue(file);
    this.previewImage(file);
    this.fileSelected = true;
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.avatar = reader.result;

    };
  }

}
