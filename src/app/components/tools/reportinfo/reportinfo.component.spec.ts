import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportinfoComponent } from './reportinfo.component';

describe('ReportinfoComponent', () => {
  let component: ReportinfoComponent;
  let fixture: ComponentFixture<ReportinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportinfoComponent]
    });
    fixture = TestBed.createComponent(ReportinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
