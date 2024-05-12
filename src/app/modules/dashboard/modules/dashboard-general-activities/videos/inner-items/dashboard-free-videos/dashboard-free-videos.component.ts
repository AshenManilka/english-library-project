import {Component, OnInit} from '@angular/core';
import {VideoService} from "../../../../../../share/services/video.service";
import { LoadingService } from 'src/app/modules/share/services/loading.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard-free-videos',
  templateUrl: './dashboard-free-videos.component.html',
  styleUrls: ['./dashboard-free-videos.component.scss']
})
export class DashboardFreeVideosComponent implements OnInit{
  ngOnInit() {
    this.getAllVideos()
  }

  constructor(
    private videoService:VideoService,
    private loadingService:LoadingService
    ) {
  }
  getAllVideos(){
    this.loadingService.showLoading();
    this.videoService.getAllVideos().subscribe(response => {
      this.videoLessons = response;
      this.loadingService.hideLoading();
    });

  }

  videoLessons:any[]=[];
}
