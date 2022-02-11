/**
 * This piece of the project calls in edittripcomponent to implement more features. 
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTripComponent } from './edit-trip.component';

describe('EditTripComponent', () => {
  let component: EditTripComponent;
  let fixture: ComponentFixture<EditTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
