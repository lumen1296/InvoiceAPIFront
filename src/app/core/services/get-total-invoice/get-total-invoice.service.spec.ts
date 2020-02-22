import { TestBed } from '@angular/core/testing';

import { GetTotalInvoiceService } from './get-total-invoice.service';

describe('GetTotalInvoiceService', () => {
  let service: GetTotalInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTotalInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
