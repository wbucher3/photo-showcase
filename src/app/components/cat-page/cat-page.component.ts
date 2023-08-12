import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';
import { MatDialog } from '@angular/material/dialog';
import { PhotoPopOutComponent } from '../atoms/photo-pop-out/photo-pop-out.component';



@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.css']
})
export class CatPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    this.generateList()
  }

  ngOnInit(): void {
  }

  images: Image[] = []

  generateList() {
    for (let i = 11; i >= 1 ; i--) {
      this.images.push({path: "assets/photos/cats/cat-" + i + ".jpg", description: "Will Bucher Bird Photo"})
    }

  }

  openPopout(image: Image) {
    // image = {path: "assets/photos/bird-showcase/bird-showcase-small-23.jpg", description: "Will Bucher Bird Photo" }
    let dialogRef = this.dialog.open(PhotoPopOutComponent, {
      height: '100vh',
      width: '100vw',
      data: {image: image!},
      disableClose: false
    });
  } 

  catchPhoto(image: Image) {
    this.openPopout(image);
  }


}
