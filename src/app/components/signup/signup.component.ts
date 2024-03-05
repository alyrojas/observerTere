import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: { email: string, password: string } = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Puedes agregar inicialización aquí si es necesaria
  }
/*
  signUp() {
    // Envía la solicitud de registro al servicio de autenticación
    this.authService.signUpUser(this.user).subscribe(
      (res: any) => {
        console.log(res);
        // Almacena el token en el almacenamiento local
        localStorage.setItem('token', res.token);
        // Redirige al usuario a la página privada después del registro exitoso
        this.router.navigate(['/private']);
      },
      (err: any) => {
        // Maneja errores de manera adecuada, por ejemplo, mostrando un mensaje de error al usuario
        console.error('Error en registro:', err);
      }
    );
  }
  */
}
