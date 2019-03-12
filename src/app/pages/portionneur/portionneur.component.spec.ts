import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortionneurComponent } from './portionneur.component';

describe('PortionneurComponent', () => {
  let component: PortionneurComponent;
  let fixture: ComponentFixture<PortionneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortionneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortionneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
