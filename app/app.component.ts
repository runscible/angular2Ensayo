import { Component } from '@angular/core';
import {ProductoServicio} from './productos/producto.service'; 
@Component({
    selector: 'pm-app',
    template: `
        <pm-productos></pm-productos>
        <h3>Hola, señor Yrigoyen</h3>
    `, 
    providers:[ProductoServicio] 
})
export class AppComponent { }
