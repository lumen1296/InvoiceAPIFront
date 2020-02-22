import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteInvoiceService {

  uri = 'https://invoice-api-backend.herokuapp.com/api';


  constructor(private http: HttpClient) { }

  deleteInvoice(id) {
    this.http.delete(`${this.uri}/deleteInvoice?id=${id}`).subscribe();
  }
}
