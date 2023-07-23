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

  constructor(@Inject(MAT_DIALOG_DATA) public data: {image: Image}) {
  }

  ngOnInit(): void {
  }

  close() {
    
  }

}
