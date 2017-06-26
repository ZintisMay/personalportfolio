import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHamburgerComponent } from './nav-hamburger.component';

describe('NavHamburgerComponent', () => {
  let component: NavHamburgerComponent;
  let fixture: ComponentFixture<NavHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
