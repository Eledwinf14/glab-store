import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  titularAlert: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  passwordError: boolean = false;
  constructor(public userService: UsersService, public router: Router) { }
  register() {
    this.titularAlert = "Los campos password y confirm password no coincide";
    const user = { email: this.email, password: this.password }
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/login');
    },
      error => {
        if (this.password != this.confirmPassword) {
          console.log(error);
          error = swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: this.titularAlert,
          })
        }

      });
  }
  ngOnInit(): void {
  }

}
