import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  mouseHoverEvent: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // moveFunction(e: any) {

  //   const cursor = document.getElementById('cursor');
  //   console.log(e.clientX)
  //   this.renderer.setStyle(cursor, 'left', e.clientX + 'px');
  //   this.renderer.setStyle(cursor, 'top', e.clientY + 'px');
  // }

  hoverFunction(e: any) {
    this.mouseHoverEvent = e;
    console.log(this.mouseHoverEvent)
  }

}
