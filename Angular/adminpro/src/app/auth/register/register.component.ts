import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  // Variable para registrar al usuario
  public user: User;
  // Variables auxiliares para el formulario de registro
  nombre: string;
  email: string;
  password: string;
  passwordConfirm: string;
  acceptTerms: Boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if(this.email == "" || this.nombre == "" || this.password == "" || this.passwordConfirm == ""){
      alert('No pueden haber campos vacios');
      return;
    }
    if (this.password != this.passwordConfirm) {
      alert('No coinciden las contraseñas');
      return;
    }
    if (!this.acceptTerms) {
      alert('No ha aceptado los terminos');
      return;
    }

    this.authService.getOneUserData(this.email).subscribe((response) => {
      if (response) {
        // Redirigir al login
        alert('El usuario indicado ya existe');
      } else {
        // Si coinciden las contraseñas
        this.user = {
          Nombre: this.nombre,
          Email: this.email,
          Password: this.password,
        };

        // Agregar al usuario
        this.authService.addUser(this.user).subscribe((response) => {
          if (response.status == 200) {
            // Redirigir al login
            this.router.navigate(['/login']);
          }
        });
      }
    });
  }
}
