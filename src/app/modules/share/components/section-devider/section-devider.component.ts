import { Component } from '@angular/core';

@Component({
  selector: 'app-section-devider',
  templateUrl: './section-devider.component.html',
  styleUrls: ['./section-devider.component.scss']
})
export class SectionDeviderComponent {
  dividerColor: string = 'white';
  dividerPosition: string = 'top';


    // Method to dynamically update the divider color
    updateDividerColor(color: string) {
      this.dividerColor = color;
    }

    // Method to dynamically update the divider position
    updateDividerPosition(position: string) {
      this.dividerPosition = position;
    }
}
