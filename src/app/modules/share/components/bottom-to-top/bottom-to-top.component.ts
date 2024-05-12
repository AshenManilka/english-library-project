import { Component, Input } from '@angular/core';
import { ScrollService } from 'src/app/modules/share/services/scroll.service';

@Component({
  selector: 'app-bottom-to-top',
  templateUrl: './bottom-to-top.component.html',
  styleUrls: ['./bottom-to-top.component.scss']
})
export class BottomToTopComponent {

  constructor( private scrollService: ScrollService){

  }
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

}
