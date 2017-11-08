import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnReverseComponent } from './column-reverse.component';

describe('ColumnReverseComponent', () => {
  let component: ColumnReverseComponent;
  let fixture: ComponentFixture<ColumnReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
