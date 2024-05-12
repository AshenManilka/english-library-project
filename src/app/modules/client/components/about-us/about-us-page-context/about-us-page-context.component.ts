import { Component } from '@angular/core';
import { NavbarService } from 'src/app/modules/share/services/navbar.service';

@Component({
  selector: 'app-about-us-page-context',
  templateUrl: './about-us-page-context.component.html',
  styleUrls: ['./about-us-page-context.component.scss']
})
export class AboutUsPageContextComponent {
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    // Set the navbar state when this component is initialized
    this.navbarService.setNavbarState('otherComponent');
  }
}
