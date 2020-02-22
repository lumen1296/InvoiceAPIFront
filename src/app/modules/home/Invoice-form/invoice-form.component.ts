import { Component, OnInit } from '@angular/core';
import { CreateInvoiceService } from 'src/app/core/services/create-invoice/create-invoice.service';
import Invoice from 'src/app/shared/models/invoice.model';
import { ListInvoiceService } from 'src/app/core/services/list-invoice/list-invoice.service';
import { DeleteInvoiceService } from 'src/app/core/services/delete-service/delete-invoice.service';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoice = new Invoice();
  tax: number;
  constructor(private createInvoiceService: CreateInvoiceService, private listInvoiceService: ListInvoiceService,
              private deleteInvoiceService: DeleteInvoiceService) { }

  ngOnInit(): void {

}
  deleteInvoice() {
    // this.listInvoiceService.listInvoice()
    //   .subscribe((data) => {
    //     const id = data.data.find(node =>  node.invoiceNumber == this.invoice.invoiceNumber)
    //     this.deleteInvoiceService.deleteInvoice(id._id);
    //   });
    this.invoice = new Invoice() ;

  }


  createInvoice() {
    this.invoice.total = Number(this.invoice.net) + Number(((this.invoice.net * this.invoice.tax) / 100));
    this.tax = Number(Math.round(((this.invoice.net * this.invoice.tax) / 100)).toFixed(2));
    this.createInvoiceService.createInvoice(this.invoice);
  }


}
