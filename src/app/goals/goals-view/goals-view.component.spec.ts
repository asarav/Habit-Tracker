import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsViewComponent } from './goals-view.component';

describe('GoalsViewComponent', () => {
  let component: GoalsViewComponent;
  let fixture: ComponentFixture<GoalsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
