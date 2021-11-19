import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat/Observable";



@Injectable({
  providedIn: "root"
})

export class ClientesService {
constructor(private http: HttpClient) {
    this.http.get('https://api-doc-sandbox.biomemakers.com/#/Clients');
}

  clientes: string[] = [];
  
  getClientes(): Observable<any>{
    return this.http.get('https://api-doc-sandbox.biomemakers.com/#/Clients');
  }

}
