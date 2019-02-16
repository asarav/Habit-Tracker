import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsViewComponent } from './achievements-view.component';

describe('AchievementsViewComponent', () => {
  let component: AchievementsViewComponent;
  let fixture: ComponentFixture<AchievementsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
