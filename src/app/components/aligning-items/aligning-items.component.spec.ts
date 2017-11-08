import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AligningItemsComponent } from './aligning-items.component';

describe('AligningItemsComponent', () => {
  let component: AligningItemsComponent;
  let fixture: ComponentFixture<AligningItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AligningItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AligningItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
