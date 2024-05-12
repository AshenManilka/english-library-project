import { Component } from '@angular/core';
import { SlideDrawerStateService } from 'src/app/modules/share/services/slide-drawer-state.service';

@Component({
  selector: 'app-general-activities-context',
  templateUrl: './general-activities-context.component.html',
  styleUrls: ['./general-activities-context.component.scss']
})
export class GeneralActivitiesContextComponent {
// slide drawer start--------------
isSlideDrawerOpen: boolean = false;

constructor(private slideDrawerStateService: SlideDrawerStateService) {
  this.slideDrawerStateService.isSlideDrawerOpen$.subscribe((isOpen) => {
    this.isSlideDrawerOpen = isOpen;
  });
}
// slide drawer end--------------
}
