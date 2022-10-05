import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import{Producto} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Producto[] = [];
  private myCart= new BehaviorSubject<Producto[]>([]);
  myCart$ = this.myCart.asObservable();
  TotalShopping= 0;

  constructor() { }

  addProduct(productos:Producto){
    let Conproduct= this.shoppingCart.filter(x => x.id == productos.id);

    console.log(Conproduct,1);
    if (Conproduct.length>0) {
      let index:number = this.shoppingCart.findIndex(x => x.id == productos.id);
      this.shoppingCart[index].amount++;
    } else {
      this.shoppingCart.push(productos);
      console.log(this.shoppingCart);

    }

    /*console.log(this.shoppingCart);
    if (this.shoppingCart.length>=1) {
      this.shoppingCart.forEach((element) => {
        if(element.id == productos.id){
          element.amount++;
          return;
        }else{this.shoppingCart.push(productos);
        return;}
      });
    } else {
      this.shoppingCart.push(productos);
    }*/


    this.myCart.next(this.shoppingCart);

  }
  removeProduct(){
    this.shoppingCart.pop();
    this.myCart.next(this.shoppingCart);
    this.shoppingCart.splice(0);


  }

  getshoppingCart(){
    return this.shoppingCart;
  }
  getTotal(){
   return this.TotalShopping= Math.round(this.shoppingCart.reduce((sum,item) =>sum+item.price*item.amount,0));
}

  }

