import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavHeaderBarComponent } from './nav-header-bar/nav-header-bar.component';
import { NavHamburgerComponent } from './nav-hamburger/nav-hamburger.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavHamburgerDropdownComponent } from './nav-hamburger-dropdown/nav-hamburger-dropdown.component';
import { IntroZComponent } from './intro-z/intro-z.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { CarouselModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderBarComponent,
    NavHamburgerComponent,
    SocialMediaComponent,
    NavHamburgerDropdownComponent,
    IntroZComponent,
    WelcomePageComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {
       path: 'welcome', component: WelcomePageComponent
      },
      {
       path: '', redirectTo: '/welcome', pathMatch: 'full'
      }       
    ]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
