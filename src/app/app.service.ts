import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, race } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    private readonly userUrl: string = `https://localhost:44306/PurchaseOrder/GetOrders`;

    constructor(private http: HttpClient) {}
  
    public getPurchaseOrder(poParam: any): Observable<any> {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      };
      const options = { headers: new HttpHeaders(headerDict) };
  
      return this.http.post(this.userUrl, poParam, options);
    }
}
