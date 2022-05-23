import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {
  // Variable para registrar al usuario
  public user:User;
  // Variables auxiliares para el formulario de registro
  email:string;
  password:string;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.getOneUserData(this.email)
      .subscribe( response => {
        if (response.password == this.password){
          // Redirigir al login
          this.router.navigate(['/dashboard']);
        } else {
          alert('Las credenciales son incorrectas');
        }
      })
  }

}
