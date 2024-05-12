import {Component, OnInit} from '@angular/core';
import {VideoService} from "../../../../../../share/services/video.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit{

  ngOnInit() {
    this.videoService.getAllVideos().subscribe(response=>{
      this.videoLessons = response;
    })
  }

  videoLessons:any[]=[];
  constructor(private videoService:VideoService) {
  }
}
