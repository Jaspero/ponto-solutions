import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagVideoComponent } from './flag-video.component';

describe('FlagVideoComponent', () => {
  let component: FlagVideoComponent;
  let fixture: ComponentFixture<FlagVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
