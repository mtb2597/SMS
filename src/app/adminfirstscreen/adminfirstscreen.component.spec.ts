import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfirstscreenComponent } from './adminfirstscreen.component';

describe('AdminfirstscreenComponent', () => {
  let component: AdminfirstscreenComponent;
  let fixture: ComponentFixture<AdminfirstscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfirstscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfirstscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
