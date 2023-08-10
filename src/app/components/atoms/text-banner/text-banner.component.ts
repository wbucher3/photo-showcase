import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-banner',
  templateUrl: './text-banner.component.html',
  styleUrls: ['./text-banner.component.css']
})
export class TextBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  displayText?: string;

}
