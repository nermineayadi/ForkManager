import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprestComponent } from './represt.component';

describe('ReprestComponent', () => {
  let component: ReprestComponent;
  let fixture: ComponentFixture<ReprestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
