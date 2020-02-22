import { Component, OnInit } from '@angular/core';
import { ListInvoiceService } from 'src/app/core/services/list-invoice/list-invoice.service';
import { GetTotalInvoiceService } from 'src/app/core/services/get-total-invoice/get-total-invoice.service';

@Component({
  selector: 'app-total-table',
  templateUrl: './total-table.component.html',
  styleUrls: ['./total-table.component.css']
})
export class TotalTableComponent implements OnInit {
  invoices: any;
  total: any;

  constructor(private listInvoiceService: ListInvoiceService, private getTotalInvoiceService: GetTotalInvoiceService) {

  }

  ngOnInit(): void {
    this.listInvoiceService.listInvoice()
      .subscribe((data) => {
        this.invoices = data;
      });
    this.getTotalInvoiceService.getTotalInvoice()
      .subscribe((data) => {
        this.total = data;
      });
  }

}
