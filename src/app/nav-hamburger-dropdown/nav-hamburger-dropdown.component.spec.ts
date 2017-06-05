import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHamburgerDropdownComponent } from './nav-hamburger-dropdown.component';

describe('NavHamburgerDropdownComponent', () => {
  let component: NavHamburgerDropdownComponent;
  let fixture: ComponentFixture<NavHamburgerDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHamburgerDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHamburgerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
