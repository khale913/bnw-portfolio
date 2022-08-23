import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  mouseHoverProjectOne: boolean = false;
  mouseHoverProjectTwo: boolean = false;
  mouseHoverProjectThree: boolean = false;
  mouseHoverProjectFour: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  hoverFunction(project: any, bool: boolean) {
    if (project === 'one') {
      this.mouseHoverProjectOne = bool;
    }
    if (project === 'two') {
      this.mouseHoverProjectTwo = bool;
    }
    if (project === 'three') {
      this.mouseHoverProjectThree = bool;
    }
    if (project === 'four') {
      this.mouseHoverProjectFour = bool;
    }
  }

}
