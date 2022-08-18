import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mouseHoverEvent: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  hoverFunction(e: any) {
    this.mouseHoverEvent = e;
    console.log(this.mouseHoverEvent)
  }
}
