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
  mouseHoverProjectFive: boolean = false;

  activeProjectHover: string = '';
  activeProjectClass: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  hoverFunction(project: any, bool: boolean) {
    if (project === 'one') {
      this.mouseHoverProjectOne = bool;
      this.activeProjectHover = '../../../assets/projectImages/wolfcycle-mobile.png';
      this.activeProjectClass = 'project-one'
    }
    if (project === 'two') {
      this.mouseHoverProjectTwo = bool;
      this.activeProjectHover = '../../../assets/projectImages/mjbuildersPorfolio.jpg';
      this.activeProjectClass = 'project-two'
    }
    if (project === 'three') {
      this.mouseHoverProjectThree = bool;
      this.activeProjectHover = '../../../assets/projectImages/gpt3portfolio.jpg';
      this.activeProjectClass = 'project-three';
    }
    if (project === 'four') {
      this.mouseHoverProjectFour = bool;
      this.activeProjectHover = '../../../assets/projectImages/gerichtPortfolio.jpg';
      this.activeProjectClass = 'project-four'
    }
    if (project === 'five') {
      this.mouseHoverProjectFive = bool;
      this.activeProjectHover = '../../../assets/projectImages/trvlporfolio.jpg';
      this.activeProjectClass = 'project-five'
    }
  }

}
