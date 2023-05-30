import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdetailsComponent } from './parentdetails.component';

describe('ParentdetailsComponent', () => {
  let component: ParentdetailsComponent;
  let fixture: ComponentFixture<ParentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentdetailsComponent]
    });
    fixture = TestBed.createComponent(ParentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
