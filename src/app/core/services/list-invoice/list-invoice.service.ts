import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListInvoiceService {

  uri = 'https://invoice-api-backend.herokuapp.com/api';


  constructor(private http: HttpClient) { }

  listInvoice(): any {
    return this.http.get(`${this.uri}/listInvoice`);
  }

}