import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuedetailsComponent } from './quedetails.component';

describe('QuedetailsComponent', () => {
  let component: QuedetailsComponent;
  let fixture: ComponentFixture<QuedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuedetailsComponent]
    });
    fixture = TestBed.createComponent(QuedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
