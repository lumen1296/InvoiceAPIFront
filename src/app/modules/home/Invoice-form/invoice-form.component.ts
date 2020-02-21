import { Component, OnInit } from '@angular/core';
import { CreateInvoiceService } from 'src/app/core/services/create-invoice/create-invoice.service';
import Invoice from 'src/app/shared/models/invoice.model';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoice = new Invoice();
  constructor(private createInvoiceService: CreateInvoiceService) { }

  ngOnInit(): void {
  }

  createInvoice() {
    this.invoice.total = this.invoice.net +((this.invoice.net * this.invoice.tax) / 100);
    console.log(this.invoice.total)
    this.createInvoiceService.createInvoice(this.invoice);
  }


}
