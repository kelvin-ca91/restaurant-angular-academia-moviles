import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDishesComponent } from './form-dishes.component';

describe('FormDishesComponent', () => {
  let component: FormDishesComponent;
  let fixture: ComponentFixture<FormDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
