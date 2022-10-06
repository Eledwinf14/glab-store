import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Producto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Producto[] = [];
  private myCart = new BehaviorSubject<Producto[]>([]);
  myCart$ = this.myCart.asObservable();
  totalShopping = 0;

  constructor() { }

  addProduct(productos: Producto) {
    let Conproduct = this.shoppingCart.filter(x => x.id == productos.id);
    console.log(Conproduct, 1);
    if (Conproduct.length > 0) {
      let index: number = this.shoppingCart.findIndex(x => x.id == productos.id);
      this.shoppingCart[index].amount++;
    } else {

      this.shoppingCart.push(productos);
      this.myCart.next(this.shoppingCart);
      console.log(this.shoppingCart);

    }
  }
  removeProduct(productos:Producto) {
    let Conproduct = this.shoppingCart.filter(x => x.id == productos.id);
    // console.log(Conproduct, 1);
    if (Conproduct.length > 0) {
      let index: number = this.shoppingCart.findIndex(x => x.id == productos.id);
      if (this.shoppingCart[index].amount>1) {
        this.shoppingCart[index].amount--;
      } else {
        this.shoppingCart.splice(index,1);
        this.myCart.next(this.shoppingCart);
      }
    }
    /*this.shoppingCart.forEach(element => {
      if (element.amount > 1) {
        element.amount--
      } else {
        this.shoppingCart.pop();
        this.myCart.next(this.shoppingCart);
      }
    })*/
  };

  getshoppingCart() {
    return this.shoppingCart;
  }
  getTotal() {
    return this.totalShopping = Math.round(this.shoppingCart.reduce((sum, item) => sum + item.price * item.amount, 0));
  }

}

