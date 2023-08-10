import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Image } from '../../models/image';

@Component({
  selector: 'app-photo-pop-out',
  templateUrl: './photo-pop-out.component.html',
  styleUrls: ['./photo-pop-out.component.css']
})
export class PhotoPopOutComponent implements OnInit {

  ngOnInit(): void { }

  currentPhoto: Image;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {image: Image}) {
    this.currentPhoto = data.image;
  }

}
