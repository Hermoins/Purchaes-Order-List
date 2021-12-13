import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderLibComponent } from './purchase-order-lib.component';

describe('PurchaseOrderLibComponent', () => {
  let component: PurchaseOrderLibComponent;
  let fixture: ComponentFixture<PurchaseOrderLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
