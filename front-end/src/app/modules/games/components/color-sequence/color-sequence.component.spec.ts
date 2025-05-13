import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSequenceComponent } from './color-sequence.component';

describe('ColorSequenceComponent', () => {
  let component: ColorSequenceComponent;
  let fixture: ComponentFixture<ColorSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSequenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
