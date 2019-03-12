import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespcomptoireComponent } from './respcomptoire.component';

describe('RespcomptoireComponent', () => {
  let component: RespcomptoireComponent;
  let fixture: ComponentFixture<RespcomptoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespcomptoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespcomptoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
