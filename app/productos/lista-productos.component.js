"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var producto_service_1 = require("./producto.service");
var listaProductos = (function () {
    //lugar donde se agrega la inyeccion de dependecias y 
    //otras cositas mas ;)
    function listaProductos(_productoServicio) {
        this._productoServicio = _productoServicio;
        this.tituloPagina = 'Lista de productos locales  ...';
        //oh si, cierta propiedades de css se definen aqui
        this.imageWidth = 60;
        this.imageMargin = 4;
        this.mostrarImagen = false;
        this.listaFiltrada = 'carrito';
    }
    //metodo del evento 
    listaProductos.prototype.moverImagen = function () {
        this.mostrarImagen = !this.mostrarImagen;
    };
    //OnInit necesita simpre   SIEMPRE este metodo : 
    listaProductos.prototype.ngOnInit = function () {
        var _this = this;
        this._productoServicio.getProductos()
            .subscribe(function (productos) { return _this.productos = productos; }, function (error) { return _this.MensajeError = error; });
        console.log('On Init, oink, oink');
    };
    listaProductos.prototype.onRatingClicked = function (message) {
        this.tituloPagina = '**  ' + message;
        console.log(message);
    };
    return listaProductos;
}());
listaProductos = __decorate([
    core_1.Component({
        selector: 'pm-productos',
        //la ruta siempre es relativa al index 
        //moduleId : module.id,
        templateUrl: 'app/productos/lista-productos.component.html',
        styleUrls: ['app/productos/lista-productos.component.css']
    }),
    __metadata("design:paramtypes", [producto_service_1.ProductoServicio])
], listaProductos);
exports.listaProductos = listaProductos;
//# sourceMappingURL=lista-productos.component.js.map