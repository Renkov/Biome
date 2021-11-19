import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesService} from './clientes/clientes.service';
import { ClientesComponent } from './clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent, ClientesComponent,]
})
export class AppModule { }
