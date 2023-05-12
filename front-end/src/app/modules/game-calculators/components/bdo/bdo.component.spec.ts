import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdoComponent } from './bdo.component';

describe('BdoComponent', () => {
  let component: BdoComponent;
  let fixture: ComponentFixture<BdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
