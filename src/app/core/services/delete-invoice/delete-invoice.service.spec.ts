import { TestBed } from '@angular/core/testing';

import { DeleteInvoiceService } from './delete-invoice.service';

describe('DeleteInvoiceService', () => {
  let service: DeleteInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
