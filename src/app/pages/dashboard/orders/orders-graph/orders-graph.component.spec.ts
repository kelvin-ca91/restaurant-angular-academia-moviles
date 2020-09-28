import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersGraphComponent } from './orders-graph.component';

describe('OrdersGraphComponent', () => {
  let component: OrdersGraphComponent;
  let fixture: ComponentFixture<OrdersGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
