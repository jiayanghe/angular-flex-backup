import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveApiComponent } from './responsive-api.component';

describe('ResponsiveApiComponent', () => {
  let component: ResponsiveApiComponent;
  let fixture: ComponentFixture<ResponsiveApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
