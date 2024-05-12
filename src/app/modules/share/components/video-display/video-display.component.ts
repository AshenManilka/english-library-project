import { Component, Input } from '@angular/core';
import { DomSanitizer,SafeResourceUrl  } from '@angular/platform-browser';



@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss']
})


export class VideoDisplayComponent {
  @Input() videos!: any[];
  @Input() categoryTitle!: string;

}
