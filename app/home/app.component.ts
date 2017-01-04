import {Component} from '@angular/core'; 
//decoradores 
@Component({
    selector: 'pm-app',
    //warning con las comillas de es6 
    template: `
    <pm-app><h3>Hola fantino</h3></pm-app>
    <pm-productos></pm-productos>
    ` 
}) 

export class appComponent{
    paginatitular: string = 'valor por defecto de pagina de inicio';
}