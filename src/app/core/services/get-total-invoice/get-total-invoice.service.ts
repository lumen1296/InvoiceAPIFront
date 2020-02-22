import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTotalInvoiceService {
  uri = 'https://invoice-api-backend.herokuapp.com/api';


  constructor(private http: HttpClient) { }

  getTotalInvoice(): any {
    return this.http.get(`${this.uri}/getTotal`);
  }

}
