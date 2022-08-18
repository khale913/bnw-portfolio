import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SplashScreenStateService } from './splash-screen-state.service';
import { SplashComponent } from './components/splash/splash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SplashComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    AboutmeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SplashScreenStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
