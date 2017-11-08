import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRowComponent } from './basic-row.component';

describe('BasicRowComponent', () => {
  let component: BasicRowComponent;
  let fixture: ComponentFixture<BasicRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
