import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";
  confirmPassword: string= "";
  passwordError: boolean = false;
  constructor(public userService: UsersService,public router:Router) { }
  register() {
    const user = {email:this.email,password: this.password}
    this.userService.register(user).subscribe(data =>{
    this.userService.setToken(data.token);
    this.router.navigateByUrl('/');
    },
    error=>{
      console.log(error);
    });
  }
  ngOnInit(): void {
  }

}
