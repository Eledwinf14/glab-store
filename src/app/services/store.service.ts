import { Injectable } from '@angular/core';
import{Producto} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private ShoppingCart: Producto[] = [];
  TotalShopping= 0;
  cantidadPlatos= 0;


  constructor() { }

  addProduct(productos:Producto){
    this.ShoppingCart.push(productos);
  }
  removeProduct(){
    this.ShoppingCart.pop();
  }
  getShoppingCart(){
    return this.ShoppingCart;
  }
  getTotal(){
   return this.TotalShopping= Math.round(this.ShoppingCart.reduce((sum,item) =>sum+item.price,0));
}
  eliminarRepetidos(){
}

  }

