import { Injectable } from "@angular/core";
import { IClients } from "src/app/shared/models/clients.interface";
import { IClientsView } from '../../shared/models/clients-view.interface';

@Injectable({
  providedIn: "root"
})
export class DetailHelper {

  getClientsView(clients: IClients[], details: any[]): IClientsView[] {
    let clientsView: any[] = [];
    clientsView = clients.map(c => {
      const id = c.subject.split("/").pop();
      return {
        user: c.name,
        email: c.email,
        address: c.address,
        posts: c.posts.length,
        company: c.company,
        photo: details.find(d => d.id === Number(id) ).image_url,
        date: details.find(d => d.id === Number(id) ).date_added
      }
    })
    return clientsView;
  }
}
