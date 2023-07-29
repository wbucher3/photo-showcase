import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage-components/homepage/homepage.component';
import { GalleryComponent } from './components/gallery-components/gallery/gallery.component';
import { ImageModalComponent } from './components/gallery-components/image-modal/image-modal.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog'; 

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    ImageModalComponent,
    
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
