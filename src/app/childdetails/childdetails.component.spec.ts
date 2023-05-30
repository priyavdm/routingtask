import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddetailsComponent } from './childdetails.component';

describe('ChilddetailsComponent', () => {
  let component: ChilddetailsComponent;
  let fixture: ComponentFixture<ChilddetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChilddetailsComponent]
    });
    fixture = TestBed.createComponent(ChilddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
