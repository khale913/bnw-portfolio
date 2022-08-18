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

    }, 500)
    console.log(this.now);
  }

  ngOnInit(): void {
  }

  hoverFunction(e: any) {
    this.mouseHoverEvent = e;
    console.log(this.mouseHoverEvent)
  }
}
