import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {VideoService} from "../../../../../../../share/services/video.service";
import {MatDialog} from "@angular/material/dialog";
import {ViewVideoComponent} from "../view-video/view-video.component";
import {MatTableDataSource} from "@angular/material/table";
import { LoadingService } from 'src/app/modules/share/services/loading.service';

@Component({
  selector: 'app-all-videos-table',
  templateUrl: './all-videos-table.component.html',
  styleUrls: ['./all-videos-table.component.scss']
})
export class AllVideosTableComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['position', 'title', 'options'];
  dataSource = new MatTableDataSource<any>();
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  pageIndex: number = 0;
  totalVideos: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  videoTitle: any;

  constructor(
    private videoService: VideoService,
    public dialog: MatDialog,
    private loadingService:LoadingService


    )

     { }

  ngOnInit() {
    this.getAllVideos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllVideos() {
    this.loadingService.showLoading()
    this.videoService.getAllVideos().subscribe((videos) => {
      this.dataSource.data = videos;
      this.totalVideos = videos.length;
      this.loadingService.hideLoading();
    }, error => {
      this.loadingService.hideLoading();
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }


  deleteVideo(id: any) {
    if (confirm('Are you sure?')) {
      this.loadingService.showLoading();
      this.videoService.deleteVideo(id);

    }
  }

  openDescriptionDialog(videoUrl: string) {
    this.dialog.open(ViewVideoComponent, {
      width: '100%',
      height:'auto',
      data: { videoUrl: videoUrl },
    });
  }

  loadVideos() {
    if (this.videoTitle.trim() != '') {
      this.videoService.getAllVideosByVideoTitle(this.videoTitle).subscribe(response => {
        this.dataSource.data = response;
      });
    } else {
      this.getAllVideos();
    }
  }
}
