import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any;
  
  constructor(public clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

}
