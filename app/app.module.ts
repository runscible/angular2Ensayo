import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {listaProductos} from './productos/lista-productos.component'
import {filtroProductoPipe} from './productos/filtro-producto.pipe'
import {starComponent} from './shared/star.component'
import {HttpModule} from '@angular/http'; 


@NgModule({
  imports: [ BrowserModule, 
  FormsModule, 
  HttpModule],
  
  
  declarations: [ AppComponent, 
  listaProductos, 
  filtroProductoPipe, 
  starComponent  ],
  bootstrap: [ AppComponent ]
  
})
export class AppModule { }
