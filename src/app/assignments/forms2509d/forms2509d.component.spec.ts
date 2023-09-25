import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms2509dComponent } from './forms2509d.component';

describe('Forms2509dComponent', () => {
  let component: Forms2509dComponent;
  let fixture: ComponentFixture<Forms2509dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Forms2509dComponent]
    });
    fixture = TestBed.createComponent(Forms2509dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
