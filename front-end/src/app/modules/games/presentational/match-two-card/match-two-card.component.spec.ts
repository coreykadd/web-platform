import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTwoCardComponent } from './match-two-card.component';

describe('MatchTwoCardComponent', () => {
  let component: MatchTwoCardComponent;
  let fixture: ComponentFixture<MatchTwoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTwoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchTwoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
