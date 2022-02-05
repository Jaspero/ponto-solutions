import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGalleryComponent } from './hero-gallery.component';

describe('HeroGalleryComponent', () => {
  let component: HeroGalleryComponent;
  let fixture: ComponentFixture<HeroGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
