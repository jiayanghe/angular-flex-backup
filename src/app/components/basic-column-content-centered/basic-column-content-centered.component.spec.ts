import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicColumnContentCenteredComponent } from './basic-column-content-centered.component';

describe('BasicColumnContentCenteredComponent', () => {
  let component: BasicColumnContentCenteredComponent;
  let fixture: ComponentFixture<BasicColumnContentCenteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicColumnContentCenteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicColumnContentCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
