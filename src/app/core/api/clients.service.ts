import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { IClientsDetail } from 'src/app/shared/models/clients-detail.interface';
import { IClients } from '../../shared/models/clients.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private URL: string = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<IClients[]> {
    return this.http.get<IClients[]>(this.URL);
  }

  getClientsDetail(url: string): Observable<IClientsDetail> {
    return this.http.get<IClientsDetail>(url);
  }
}
