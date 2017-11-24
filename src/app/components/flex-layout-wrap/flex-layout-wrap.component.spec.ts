import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutWrapComponent } from './flex-layout-wrap.component';

describe('FlexLayoutWrapComponent', () => {
  let component: FlexLayoutWrapComponent;
  let fixture: ComponentFixture<FlexLayoutWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLayoutWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
