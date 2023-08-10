import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { MatDialog } from '@angular/material/dialog';
import { PhotoPopOutComponent } from '../../atoms/photo-pop-out/photo-pop-out.component';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  ngOnInit(): void {
  }

  images: Image[] = []

  constructor(public dialog: MatDialog) {
    this.generateList()
   }

  generateList() {
    for (let i = 44; i >= 1 ; i--) {
      this.images.push({path: "assets/photos/bird-showcase/bird-showcase-small-" + i + ".jpg", description: "Will Bucher Bird Photo"})
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
