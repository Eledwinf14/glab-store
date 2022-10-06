import { Component, OnInit,Output } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { UsersService } from "../../services/users.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu= false;
  counter = 0;
  userLog="";

  constructor( private storeService: StoreService,private userService:UsersService) { }

  ngOnInit(): void {
    this.getUserLogged();
    this.storeService.myCart$.subscribe(productos =>{
    this.counter = productos.length;
  })

  }
  toggleMenu(){
    this.activeMenu= !this.activeMenu;
  }
  getUserLogged() {
    this.userService.getUser().subscribe(user => {
     this.userLog = user.data.email;
     console.log(user.data);
    });
  }


}
