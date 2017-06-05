import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroZComponent } from './intro-z.component';

describe('IntroZComponent', () => {
  let component: IntroZComponent;
  let fixture: ComponentFixture<IntroZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
