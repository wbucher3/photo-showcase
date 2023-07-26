import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[] = []

  constructor(public dialog: MatDialog) {
    this.generateList()
   }

  generateList() {
    for (let i = 44; i >= 1 ; i--) {
      this.images.push({path: "assets/photos/bird-showcase/bird-showcase-small-" + i + ".jpg", description: "Will Bucher Bird Photo"})
    }

  }

  ngOnInit(): void {
  }

  openModal(image: Image) {
    let dialogRef = this.dialog.open(ImageModalComponent, {
      height: '100vh',
      width: '100vw',
      data: {image: image!},
      disableClose: false
    });

  }



}
