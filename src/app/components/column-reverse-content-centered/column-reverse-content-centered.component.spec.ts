import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnReverseContentCenteredComponent } from './column-reverse-content-centered.component';

describe('ColumnReverseContentCenteredComponent', () => {
  let component: ColumnReverseContentCenteredComponent;
  let fixture: ComponentFixture<ColumnReverseContentCenteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnReverseContentCenteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnReverseContentCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
