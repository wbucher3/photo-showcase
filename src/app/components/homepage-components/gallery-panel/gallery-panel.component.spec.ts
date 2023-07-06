import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPanelComponent } from './gallery-panel.component';

describe('GalleryPanelComponent', () => {
  let component: GalleryPanelComponent;
  let fixture: ComponentFixture<GalleryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
