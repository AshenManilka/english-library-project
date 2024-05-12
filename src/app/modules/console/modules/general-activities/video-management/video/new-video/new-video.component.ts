import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VideoService} from "../../../../../../share/services/video.service";
import {BookService} from "../../../../../../share/services/book.service";
import {AdminService} from "../../../../../../share/services/admin.service";
import {VideoDto} from "../../../../../../share/dto/videoDto";
import { LoadingService } from 'src/app/modules/share/services/loading.service';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { SnackBarService } from 'src/app/modules/share/services/snack-bar.service';

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss']
})
export class NewVideoComponent implements OnInit {

  thumbnail: File | any;

  constructor(
    private loadingService:LoadingService,
    private fireStorageService:AngularFireStorage,
    private fireStoreService:AngularFirestore,
    private snackBarService:SnackBarService
    ) {
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    title: new FormControl("", [Validators.required]),
    url: new FormControl("", [Validators.required]),
    thumbnail: new FormControl("", Validators.required)
  })

  createVideo() {
    this.loadingService.showLoading();
    let title = this.form.get('title')?.value;
    let url = this.form.get('url')?.value;
    let thumbnail = this.form.get('thumbnail')?.value;
    this.createVideoo(title,url, thumbnail);
  }


  async createVideoo(
    title: any,
    videoUrl: any,
    thumbnail:File|any
  ) {
    const previewImageRef = this.fireStorageService.ref(`videoThumbnails/${title}`);
    const previewImageTask = previewImageRef.put(thumbnail);
    const previewImageSnapshot = await previewImageTask;
    const previewImageUrl = await previewImageSnapshot.ref.getDownloadURL();

    const videoDto: VideoDto = {
      title: title,
      videoUrl: videoUrl,
      thumbnail:previewImageUrl,
      date: new Date(),
      activeState: true
    }
    await this.fireStoreService.collection("Videos").doc().set(videoDto);
    this.loadingService.hideLoading();
    this.snackBarService.snackBar("Video Saved Successfully", "close", 5000, 'ltr', 'center', 'top');

  }



  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('thumbnail')?.setValue(file);
    }
  }

}
