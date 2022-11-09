import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kelton-portfolio';
  cursor = document.getElementsByClassName('cursor');

  constructor(private renderer: Renderer2) {

  }
  @HostListener('document:mousemove', ['$event']) onMouseMove(e: any) {
    const cursor = document.getElementById('cursor');
    // console.log(e.clientX)
    this.renderer.setStyle(cursor, 'left', e.clientX + 'px');
    this.renderer.setStyle(cursor, 'top', e.clientY + 'px');
  }
  ngOnInit() {
    const cursor = document.getElementById('cursor')

  }

  // moveFunction(e: any) {
  //   console.log(e)
  // }



}
