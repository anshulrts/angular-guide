import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAndEventBindingComponentComponent } from './property-and-event-binding-component.component';

describe('PropertyAndEventBindingComponentComponent', () => {
  let component: PropertyAndEventBindingComponentComponent;
  let fixture: ComponentFixture<PropertyAndEventBindingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyAndEventBindingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyAndEventBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
