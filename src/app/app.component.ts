import { Component,OnInit } from '@angular/core';
import { StoreService } from "../app/services/store.service";
import{Producto} from "../app/models/product.model";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ShoppingCart: Producto[] = [];
  TotalShopping = 0;
  productos: Producto [] = [
    {
        "id": 1,
        "name": "Filete de ternera con salsa",
        "qualification": 4.9,
        "time": "25-30min",
        "price": 14.99,
        "image": "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        "id": 2,
        "name": "Desayuno de primer plano lácteos",
        "qualification": 4.7,
        "time": "20-25min",
        "price": 9.99,
        "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        "id": 3,
        "name": "Burrito de pollo",
        "qualification": 4.6,
        "time": "25-30min",
        "price": 13.99,
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        "id": 4,
        "name": "Plato de salmón",
        "qualification": 4.5,
        "time": "25-30min",
        "price": 15.99,
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        "id": 5,
        "name": "Postre",
        "qualification": 4.8,
        "time": "15-20min",
        "price": 6.99,
        "image": "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        "id": 6,
        "name": "Sándwich servido en la tabla de cortar",
        "qualification": 4.7,
        "time": "10-15min",
        "price": 9.99,
        "image": "./assets/images/sandwish.jpeg"
    },
    {
        "id": 7,
        "name": "Plato de aguacate cocido",
        "qualification": 4.4,
        "time": "15-25min",
        "price": 12.99,
        "image": "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        "id": 8,
        "name": "Hamburguesa",
        "qualification": 4.6,
        "time": "10-15min",
        "price": 14.99,
        "image": "https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    }
]

  title = 'glab-store';
  name= 'eduin';
  age = 28;
  img = 'https://cdn.atomix.vg/wp-content/uploads/2014/12/naruto03.jpg'
  btnDisabled = true;
  persona ={
    nombre: 'jose',
    avatar: this.img,
    age: this.age
  }
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.persona.age +=1;

  }
  onScroll(event:Event){
    const elemento= event.target as HTMLElement;
    console.log(elemento.scrollTop);
  }
  changeName(event:Event){
    const elemento= event.target as HTMLInputElement;
    this.persona.nombre = elemento.value;
  }
  addProducto(){
   this.producticos.push(this.newProduct);
  this.newProduct = '';
  }
  deleteM(index:number){
    this.producticos.splice(index);
  }

  newProduct = '';
  producticos= [
   "michy", "toby"
  ];
  categorias = [
      {
          "id": 1,
          "name": "All",
          "icon": "./assets/icons/bandeja-de-comida.png"
      },
      {
          "id": 2,
          "name": "Pizza",
          "icon": "./assets/icons/porcion-de-pizza.png"
      },
      {
          "id": 3,
          "name": "Asian",
          "icon":  './assets/icons/ramen.png'
      },
      {
          "id": 4,
          "name": "Burgers",
          "icon": "./assets/icons/1046784.svg"
      },
      {
          "id": 5,
          "name": "Barbecue",
          "icon": "./assets/icons/barbacoa.png"
      },
      {
          "id": 6,
          "name": "Dessers",
          "icon": "./assets/icons/ice-cream.png"
      },
      {
          "id": 7,
          "name": "Thai",
          "icon": "./assets/icons/thai-food.png"
      },
      {
          "id": 8,
          "name": "Sushi",
          "icon": "./assets/icons/sushi.png"
      }
  ]

imgParent="";
onLoaded(img:string){
  console.log('log padre',img);
}
constructor(private storeService: StoreService){
this.ShoppingCart =  this.storeService.getShoppingCart();
}
onAddToShopping(productos:Producto){
  console.log(productos);
  this.storeService.addProduct(productos);
  this.TotalShopping= this.storeService.getTotal();
  }
}
