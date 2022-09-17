import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../splash-screen-state.service';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private splashScreenStateService: SplashScreenStateService, private scroller: ViewportScroller) { }

  ngOnInit(): void {
    // stops the timeout
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 1);
  }


}
