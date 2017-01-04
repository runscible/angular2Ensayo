import {PipeTransform, Pipe} from '@angular/core'; 
import {Iproducto} from './producto'; 

@Pipe({
    name : 'filtroProducto'
})    

export class filtroProductoPipe implements PipeTransform{
    transform(value: Iproducto[], filterBy: string):Iproducto[]{
        filterBy = filterBy ? filterBy.toLowerCase(): null; 
        return filterBy ? value.filter((producto: Iproducto )=>
        producto.productName.toLocaleLowerCase().indexOf(filterBy) !== -1): value ;
    }
}