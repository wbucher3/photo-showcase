import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage-components/homepage/homepage.component';
import { GalleryComponent } from './components/gallery-components/gallery/gallery.component';
import { ImageModalComponent } from './components/gallery-components/image-modal/image-modal.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { BannerComponent } from './components/atoms/banner/banner.component';
import { PhotoBannerComponent } from './components/atoms/photo-banner/photo-banner.component';
import { TextBannerComponent } from './components/atoms/text-banner/text-banner.component';
import { GalleryRowComponent } from './components/atoms/gallery-row/gallery-row.component';
import { FooterComponent } from './components/atoms/footer/footer.component';
import { PhotoPopOutComponent } from './components/atoms/photo-pop-out/photo-pop-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    ImageModalComponent,
    BannerComponent,
    PhotoBannerComponent,
    TextBannerComponent,
    GalleryRowComponent,
    FooterComponent,
    PhotoPopOutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NoopAnimationsModule,
    
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
