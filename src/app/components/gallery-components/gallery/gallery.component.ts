import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }


  // maybe use this? 
  // https://www.npmjs.com/package/teqnia-ng-image-fullscreen-view
  
  images: Image[] = [
    {path: "assets/photos/gallery/6S9A1990.jpg", description: "Mockingbird with Blueberry"},
    {path: "assets/photos/gallery/6S9A2716.jpg", description: "Mockingbird in Fligh"},
    {path: "assets/photos/gallery/6S9A2850.jpg", description: "Great Blue Heron"},
    {path: "assets/photos/gallery/6S9A1309.jpg", description: "Cardinal"},
    {path: "assets/photos/gallery/6S9A3320.jpg", description: "Dark Eyed Junco"},

    {path: "assets/photos/6S9A7311.jpg", description: "House Finch in the Tree"},
    {path: "assets/photos/yellow-bellied-sapsucker.jpg", description: "Yellow Bellied Sapsucker"},
    {path: "assets/photos/6S9A6006.jpg", description: "Cardinal"},
    {path: "assets/photos/6S9A7140.jpg", description: "Osprey with Fish"},


  ]

  ngOnInit(): void {
  }

}
