import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlgestionComponent } from './controlgestion.component';

describe('ControlgestionComponent', () => {
  let component: ControlgestionComponent;
  let fixture: ComponentFixture<ControlgestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlgestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
