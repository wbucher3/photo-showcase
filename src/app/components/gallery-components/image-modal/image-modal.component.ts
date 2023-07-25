import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Image } from '../../models/image';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  currentPhoto:number ;
  currentData: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {image: Image}) {
    
    this.currentPhoto = parseInt(this.data.image.path!.slice(48, this.data.image.path!.length));
    this.currentData = this.data.image.path!;
  }

  ngOnInit(): void {
  }


  nextPhoto() {
    this.currentData = "assets/photos/bird-showcase/bird-showcase-small-" + (this.currentPhoto - 1) + ".jpg";
    this.currentPhoto = this.currentPhoto - 1;
  }

  previousPhoto() {
    this.currentData = "assets/photos/bird-showcase/bird-showcase-small-" + (this.currentPhoto + 1) + ".jpg";
    this.currentPhoto = this.currentPhoto + 1;
  }
}
