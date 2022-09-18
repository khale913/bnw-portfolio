import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mouseHoverEvent: boolean = false;
  public now: Date = new Date();
  hours: any;
  minutes: any;
  seconds: any;
  dayTime: string = '';
  openOverlay: boolean = false;

  constructor() {
    setInterval(() => {
      this.now = new Date();
      this.hours = this.now.getHours()
      this.minutes = this.now.getMinutes();
      this.seconds = this.now.getSeconds();
      if (this.hours > 12) {
        this.dayTime = 'PM';
        this.hours = this.hours - 12;
      } else {
        this.dayTime = 'AM';
      }
      if (this.seconds < 10) {
        this.seconds = '0' + this.seconds;
      }

      if (this.hours < 10) {
        this.hours = '0' + this.hours;
      }

      if (this.minutes < 10) {
        this.minutes = '0' + this.minutes;
      }

    }, 500)
    console.log(this.now);
  }

  ngOnInit(): void {
  }

  hoverFunction(e: any) {
    this.mouseHoverEvent = e;
    console.log(this.mouseHoverEvent)
  }

  navigatePage(page: any) {
    document.getElementById(page)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    this.openOverlay = false;
  }

  openOverlayMenu() {
    this.openOverlay = !this.openOverlay;
  }

  closeModal() {
    this.openOverlay = false;
  }


}
