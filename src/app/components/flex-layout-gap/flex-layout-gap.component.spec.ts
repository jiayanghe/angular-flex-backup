import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutGapComponent } from './flex-layout-gap.component';

describe('FlexLayoutGapComponent', () => {
  let component: FlexLayoutGapComponent;
  let fixture: ComponentFixture<FlexLayoutGapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLayoutGapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
