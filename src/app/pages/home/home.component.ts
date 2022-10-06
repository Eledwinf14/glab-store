import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { StoreService } from "../../services/store.service";
import { Producto } from "../../models/product.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shoppingCart: Producto[] = [];
  totalShopping = 0;
  active= "All";
  userlog="";
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
      "icon": './assets/icons/ramen.png'
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
  imgParent = "";
  onLoaded(img: string) {
    console.log('log padre', img);
  }
  constructor(private storeService: StoreService, public userService: UsersService) {
    this.shoppingCart = this.storeService.getshoppingCart();
  }
  onAddToShopping(productos: Producto) {
    console.log(productos);
    this.storeService.addProduct(productos);
    this.totalShopping = this.storeService.getTotal();
  }
  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(user => {
     this.userlog = user.data.first_name;
     console.log(user.data);
    });
  }
}
