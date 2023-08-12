import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-photo-banner',
  templateUrl: './photo-banner.component.html',
  styleUrls: ['./photo-banner.component.css']
})
export class PhotoBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagePath: string = "assets/photos/house-finch.jpg"

  @Input()
  image?: Image;
}
