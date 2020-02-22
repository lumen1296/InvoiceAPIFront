import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalInvoicesComponent } from './total-invoices.component';
import { TotalTableComponent } from './total-table/total-table.component';



@NgModule({
  declarations: [TotalInvoicesComponent, TotalTableComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [TotalInvoicesComponent]
})
export class TotalInvoicesModule { }
