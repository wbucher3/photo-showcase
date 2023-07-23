import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[] = []

  constructor() {
    this.generateList()
   }

  generateList() {
    for (let i = 41; i >= 1 ; i--) {
      this.images.push({path: "assets/photos/bird-showcase/showcase-" + i + ".jpg", description: "bird", isSelected: false})
    }

  }

  ngOnInit(): void {
  }

}
