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
  tax: number;
  constructor(private createInvoiceService: CreateInvoiceService) { }

  ngOnInit(): void {

}
  deleteInvoice() {
    this.invoice = new Invoice() ;

  }


  createInvoice() {
    this.invoice.total = Number(this.invoice.net) + Number(((this.invoice.net * this.invoice.tax) / 100));
    this.tax = Number(Math.round(((this.invoice.net * this.invoice.tax) / 100)).toFixed(2));
    this.createInvoiceService.createInvoice(this.invoice);
  }


}
