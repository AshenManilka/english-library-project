import { Component } from '@angular/core';
import { ScrollService } from 'src/app/modules/share/services/scroll.service';

@Component({
  selector: 'app-main-footer-nav-area',
  templateUrl: './main-footer-nav-area.component.html',
  styleUrls: ['./main-footer-nav-area.component.scss']
})
export class MainFooterNavAreaComponent {

  currentYear: number;

  constructor(
    private  scrollService:ScrollService
  ) {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);

  }
}
