import { Component } from '@angular/core';
import { SlideDrawerStateService } from 'src/app/modules/share/services/slide-drawer-state.service';
@Component({
  selector: 'app-dashboard-general-activites-context',
  templateUrl: './dashboard-general-activites-context.component.html',
  styleUrls: ['./dashboard-general-activites-context.component.scss']
})
export class DashboardGeneralActivitesContextComponent {


// slide drawer start--------------
isSlideDrawerOpen: boolean = false;

constructor(private slideDrawerStateService: SlideDrawerStateService) {
  this.slideDrawerStateService.isSlideDrawerOpen$.subscribe((isOpen) => {
    this.isSlideDrawerOpen = isOpen;
  });
}
// slide drawer end--------------
}
