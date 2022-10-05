import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titularAlert: string= "";
  passEmpthy: string = "";
  messageError = "";
  email: string = "";
  password: string = "";
  constructor(public userService: UsersService,public router: Router) { }

  login() {
    this.titularAlert="Usuario o contraseña incorrectos!!!";
    this.passEmpthy="Debe ingresar todos los campos!!!!";
    const user = {email:this.email,password:this.password};
    this.userService.login(user).subscribe(data=>{
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/home');
    },
    error=>{
        error=swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.titularAlert,
        });
    });
}
  ngOnInit(): void {
  }

}
