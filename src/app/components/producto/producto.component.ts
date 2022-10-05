import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Producto} from '../../models/product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() productos: Producto =
    {
      id: 0,
      name: '',
      qualification: 0,
      time: '',
      price: 0,
      image: '',
      amount: 0
    }
@Output() addedProduct= new EventEmitter<Producto>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddCart(){
this.addedProduct.emit(this.productos);

  }

}
