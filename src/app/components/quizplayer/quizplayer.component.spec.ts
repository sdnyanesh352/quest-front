import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizplayerComponent } from './quizplayer.component';

describe('QuizplayerComponent', () => {
  let component: QuizplayerComponent;
  let fixture: ComponentFixture<QuizplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizplayerComponent]
    });
    fixture = TestBed.createComponent(QuizplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
