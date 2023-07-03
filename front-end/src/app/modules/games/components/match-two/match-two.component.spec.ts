import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTwoComponent } from './match-two.component';

describe('MatchTwoComponent', () => {
  let component: MatchTwoComponent;
  let fixture: ComponentFixture<MatchTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
