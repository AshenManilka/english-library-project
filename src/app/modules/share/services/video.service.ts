import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {SnackBarService} from "./snack-bar.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {VideoDto} from "../dto/videoDto";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {LoadingService} from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private snackBarService: SnackBarService,
              private fireStoreService: AngularFirestore,
              private loadingService: LoadingService
  ) {
  }

  public getAllVideosCount(): Observable<number> {
    return this.fireStoreService.collection('Videos', ref =>
      ref.where('activeState', '==', true))
      .get()
      .pipe(map(snapshot => snapshot.size));
  }


  getAllVideos(): Observable<any[]> {
    return this.fireStoreService.collection('Videos').snapshotChanges()
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

  public deleteVideo(id: any) {
    this.fireStoreService.collection("Videos").doc(id).delete().then(r => {
      this.loadingService.hideLoading();
      this.snackBarService.snackBar("Video Deleted Successfully", "close", 5000, 'ltr', 'center', 'top');
    });
  }


  getAllVideosByVideoTitle(videoTitle: any) {
    return this.fireStoreService.collection('Videos', ref =>
      ref.where('title', '>=', videoTitle)
        .where('title', '<=', videoTitle + '\uf8ff')
        .orderBy('title')
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
}
