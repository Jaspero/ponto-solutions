import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagImageComponent } from './flag-image.component';

describe('FlagImageComponent', () => {
  let component: FlagImageComponent;
  let fixture: ComponentFixture<FlagImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
