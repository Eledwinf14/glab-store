import { Component, OnInit } from '@angular/core';
import{Producto} from '../../models/product.model';
import { StoreService } from "../../services/store.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  titularAlert: string = "";
  miCarritoSinDuplicados: Producto[]=[];
  shoppingCart: Producto[] = [];
  totalShopping= 0;
  counter = 0;
  productos: Producto[] = [
    {
        "id": 1,
        "name": "Filete de ternera con salsa",
        "qualification": 4.9,
        "time": "25-30min",
        "price": 14.99,
        "image": "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "amount": 1,
        "categoria": "barbecue"
    },
    {
        "id": 2,
        "name": "Desayuno de primer plano lácteos",
        "qualification": 4.7,
        "time": "20-25min",
        "price": 9.99,
        "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "amount": 1,
        "categoria": "dessers"
    },
    {
        "id": 3,
        "name": "Burrito de pollo",
        "qualification": 4.6,
        "time": "25-30min",
        "price": 13.99,
        "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "amount": 1,
        "categoria": "asian"
    },
    {
        "id": 4,
        "name": "Plato de salmón",
        "qualification": 4.5,
        "time": "25-30min",
        "price": 15.99,
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "amount": 1,
        "categoria": "sushi"
    },
    {
        "id": 5,
        "name": "Postre",
        "qualification": 4.8,
        "time": "15-20min",
        "price": 6.99,
        "image": "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "amount": 1,
        "categoria": "dessers"
    },
    {
        "id": 6,
        "name": "Sándwich servido en la tabla de cortar",
        "qualification": 4.7,
        "time": "10-15min",
        "price": 9.99,
        "image": "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "amount": 1,
        "categoria": "burguers"
    },
    {
        "id": 7,
        "name": "Plato de aguacate cocido",
        "qualification": 4.4,
        "time": "15-25min",
        "price": 12.99,
        "image": "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "amount": 1,
        "categoria": "thai"
    },
    {
        "id": 8,
        "name": "Hamburguesa",
        "qualification": 4.6,
        "time": "10-15min",
        "price": 14.99,
        "image": "https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440",
        "amount": 1,
        "categoria": "burguers"
    }
]
totalplatos= 0;
  constructor(private storeService: StoreService)
  {
this.shoppingCart = this.storeService.getshoppingCart();
this.totalShopping = this.storeService.getTotal();
  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(productos =>{
    this.counter = productos.length;
  })
}
onAddToShopping(productos:Producto){
console.log(productos);
this.storeService.addProduct(productos);
this.totalShopping= this.storeService.getTotal();
this.TotalPlatos();
}
eliminarToCart(productos:Producto){
  this.storeService.removeProduct(productos);
  this.totalShopping = this.storeService.getTotal();
  this.TotalPlatos();
}
checkP() {
  this.titularAlert=("Estamos preparando tu pedido");
  return swal.fire({
    icon: 'success',
    title: 'Pedido confirmado',
    text: this.titularAlert,
    imageUrl: 'https://c.tenor.com/J5M8QAw4s3YAAAAC/tapas2go-isu-pedido.gif',
  imageHeight: 300,
  });
}
TotalPlatos(){
  this.totalplatos=0;
  this.shoppingCart.forEach(element => {
    this.totalplatos+=element.amount;

  });
}


}
