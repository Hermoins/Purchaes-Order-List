import { TestBed } from '@angular/core/testing';

import { PurchaseOrderLibService } from './purchase-order-lib.service';

describe('PurchaseOrderLibService', () => {
  let service: PurchaseOrderLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseOrderLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
