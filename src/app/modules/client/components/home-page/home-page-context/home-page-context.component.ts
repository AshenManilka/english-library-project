import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/modules/share/services/navbar.service';

@Component({
  selector: 'app-home-page-context',
  templateUrl: './home-page-context.component.html',
  styleUrls: ['./home-page-context.component.scss']
})
export class HomePageContextComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.resetNavbarState(); // Reset navbar state when navigating to home page
  }

}
