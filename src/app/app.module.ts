import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { TotalInvoicesModule } from './modules/total-invoices/total-invoices.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    TotalInvoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
