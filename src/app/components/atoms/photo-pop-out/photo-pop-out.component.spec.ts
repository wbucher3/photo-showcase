import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPopOutComponent } from './photo-pop-out.component';

describe('PhotoPopOutComponent', () => {
  let component: PhotoPopOutComponent;
  let fixture: ComponentFixture<PhotoPopOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPopOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoPopOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
