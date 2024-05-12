import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-console-body',
  templateUrl: './console-body.component.html',
  styleUrls: ['./console-body.component.scss']
})
export class ConsoleBodyComponent implements OnInit{

  constructor(private title:Title) {
  }

  ngOnInit() {
    this.title.setTitle("Console")
  }

}
