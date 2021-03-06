import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateInvoiceService {


  uri = 'https://invoice-api-backend.herokuapp.com/api';


  constructor(private http: HttpClient) { }

  createInvoice(Invoice) {
    console.log(Invoice)
    this.http.post(`${this.uri}/createInvoice`, Invoice)
      .subscribe();
  }



}
