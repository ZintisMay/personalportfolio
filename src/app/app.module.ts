import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavHeaderBarComponent } from './nav-header-bar/nav-header-bar.component';
import { NavHamburgerComponent } from './nav-hamburger/nav-hamburger.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { IntroZComponent } from './intro-z/intro-z.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { CarouselModule} from 'ngx-bootstrap';

import { ContentViewComponent } from './content-view/content-view.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderBarComponent,
    NavHamburgerComponent,
    SocialMediaComponent,
    IntroZComponent,
    WelcomePageComponent,
    ContentViewComponent,
    ContactMeComponent,
    AboutMeComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {
       path: 'welcome', component: WelcomePageComponent
      },
      {
       path: '', redirectTo: '/welcome', pathMatch: 'full'
      },   
      {
       path: ':type/:name', component: ContentViewComponent
      },
      {
       path: 'contact-me', component: ContactMeComponent
      },
      {
       path: 'about-me', component: AboutMeComponent
      }        
    ]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
