import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../../models/image';


@Component({
  selector: 'app-gallery-row',
  templateUrl: './gallery-row.component.html',
  styleUrls: ['./gallery-row.component.css']
})
export class GalleryRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  image1?: Image;

  @Input()
  image2?: Image;

  @Output()
  photoClicked: EventEmitter<Image> = new EventEmitter<Image>();

  emitPhoto(image: Image) {
    this.photoClicked.emit(image)
  }
  

}
