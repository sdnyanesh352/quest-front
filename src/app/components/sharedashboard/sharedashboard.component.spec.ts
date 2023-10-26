import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedashboardComponent } from './sharedashboard.component';

describe('SharedashboardComponent', () => {
  let component: SharedashboardComponent;
  let fixture: ComponentFixture<SharedashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedashboardComponent]
    });
    fixture = TestBed.createComponent(SharedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
