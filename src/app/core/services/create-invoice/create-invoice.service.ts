import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateInvoiceService {


  uri = 'http://localhost:4000/api';


  constructor(private http: HttpClient) { }

  createInvoice(Invoice) {
    console.log(Invoice)
    this.http.post(`${this.uri}/createInvoice`, Invoice)
      .subscribe(res => alert(res));
  }



}
