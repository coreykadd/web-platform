import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdoGearScoreComponent } from './bdo-gear-score.component';

describe('BdoGearScoreComponent', () => {
  let component: BdoGearScoreComponent;
  let fixture: ComponentFixture<BdoGearScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdoGearScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdoGearScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
