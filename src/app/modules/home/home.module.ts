import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceFormComponent } from './Invoice-form/invoice-form.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent, InvoiceFormComponent, InvoiceTableComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [HomeComponent,InvoiceFormComponent, InvoiceTableComponent]
})
export class HomeModule { }
