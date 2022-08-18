import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../splash-screen-state.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    // stops the timeout
    setTimeout(() => {
      this.splashScreenStateService.stop();
    }, 10);
  }

}
