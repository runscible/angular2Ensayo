import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'; 
import {Iproducto}   from './producto';
import {Observable} from 'rxjs/Observable'; 

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//servicio inyectable
@Injectable()
export class ProductoServicio{
    private _productoUrl = 'api/products/products.json'; 

    constructor( private _http: Http ){}

    getProductos (): Observable<Iproducto[]>{
        return this._http.get(this._productoUrl)
        .map((response: Response)=><Iproducto[]> response.json())
        .do(data=>console.log('todo aca es : ' + JSON.stringify(data)))
        .catch(this.handleError);
        }
        private handleError(error: Response){
            console.info(error);
            return Observable.throw(error.json().error || 'server error');
        } 
    }
