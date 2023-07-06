import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage-components/homepage/homepage.component';
import { ContactComponent } from './components/contact-components/contact/contact.component';
import { GalleryComponent } from './components/gallery-components/gallery/gallery.component';
import { TitleBannerComponent } from './components/homepage-components/title-banner/title-banner.component';
import { AboutMeComponent } from './components/homepage-components/about-me/about-me.component';
import { GalleryPanelComponent } from './components/homepage-components/gallery-panel/gallery-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    GalleryComponent,
    TitleBannerComponent,
    AboutMeComponent,
    GalleryPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
