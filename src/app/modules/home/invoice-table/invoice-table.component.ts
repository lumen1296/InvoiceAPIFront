import { Component, OnInit } from '@angular/core';
import { ListInvoiceService } from 'src/app/core/services/list-invoice/list-invoice.service';
import Invoice from 'src/app/shared/models/invoice.model';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {
  invoices: any;

  constructor(private listInvoiceService: ListInvoiceService) {

   }

  ngOnInit() {
    this.listInvoiceService.listInvoice()
    .subscribe((data) => {
      this.invoices = data;
    });  
  }

}
