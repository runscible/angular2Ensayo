import {Component, OnInit} from '@angular/core';
import {Iproducto} from './producto';  
import {ProductoServicio} from './producto.service'; 
@Component({
    selector: 'pm-productos', 
    //la ruta siempre es relativa al index 
    //moduleId : module.id,
    templateUrl: 'app/productos/lista-productos.component.html', 
    styleUrls: ['app/productos/lista-productos.component.css']  
}) 
export class listaProductos implements OnInit{
    tituloPagina: string =  'Lista de productos locales  ...';
    //oh si, cierta propiedades de css se definen aqui
    imageWidth: number = 60;    
    imageMargin: number= 4; 
    mostrarImagen: boolean = false;  
    listaFiltrada: string = 'carrito'; 
    productos: Iproducto[]; 
    MensajeError: string; 
    //lugar donde se agrega la inyeccion de dependecias y 
    //otras cositas mas ;)
        constructor(private _productoServicio : ProductoServicio){
            
        }
    //metodo del evento 
    moverImagen(): void{
        this.mostrarImagen = !this.mostrarImagen;  
    }
    //OnInit necesita simpre   SIEMPRE este metodo : 
    ngOnInit(): void{
        this._productoServicio.getProductos()
        .subscribe(productos => this.productos = productos, 
        error => this.MensajeError = <any>error); 
        console.log('On Init, oink, oink');
    }
    onRatingClicked(message: string ): void {
        this.tituloPagina = '**  ' + message; 
        console.log(message);
    }
}
